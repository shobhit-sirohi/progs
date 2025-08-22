import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import "../App.css";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import star from "../assets/images/Polygon10.png";
import arrow from "../assets/images/arrow.svg";
import gradient1 from "../assets/images/gradient1.png";
import gradient2 from "../assets/images/gradient-top-1.png";
import gradient3 from "../assets/images/gradient-top-2.png";
import polygon from "../assets/images/polygon.svg";

const WorkCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
    skipSnaps: false,
    slidesToScroll: 1,
    //containScroll: "keepSnaps",
    draggable: true,
    wheelEnabled: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    // Set initial index on mount
    setSelectedIndex(emblaApi.selectedScrollSnap());

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const work = [
    {
      id: 1,
      title: "HDFC Bank Mobile App",
      description:
        "Reimagining the HDFC mobile app for clarity, speed and everyday usability.",
      image: project1,
      button: "Read Case Study",
      link: "/projects/project1",
    },
    {
      id: 2,
      title: "My Portfolio Project",
      description:
        "Translating who I am into pixels and pages.",
      image: project2,
      button: "View Project",
      link: "#",
    },
    {
      id: 3,
      title: "Food Concierge App (TBD)",
      description:
        "A food concierge app for personalized, mood-based dining experiences.",
      image: project3,
      button: "Coming Soon",
      link: "#",
    },
    {
      id: 3,
      title: "My Artworks",
      description:
        "Where I create for no reason but joy.",
      image: project4,
      button: "View Gallery",
      link: "#",
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Left gradient */}
      <img
        src={gradient1}
        alt="Left gradient"
        className="absolute top-0 left-0 w-auto h-full max-w-none"
      />
      {/* Top gradients, half out */}
      <img
        src={gradient2}
        alt="Top gradient 1"
        className="absolute left-0 w-full max-w-none"
        style={{ top: "-650px", zIndex: 1, left: "-100px" }}
      />
      <img
        src={gradient3}
        alt="Top gradient 2"
        className="absolute left-0 w-full max-w-none"
        style={{ top: "-680px", zIndex: 2, left: "300px" }}
      />
      {/* z-[-1] opacity-40 */}
    <div className="relative z-10 flex flex-col items-center gap-4 px-4 al md:px-14 lg:px-24">
      <h2 className="flex items-center pt-10 pb-4 md:pb-14">
        <span className="text-[#F6F5F3] text-2xl font-bold md:text-5xl">
          Look
        </span>
        <img className="w-16" src={star} alt="star icon" />
        <span className="text-[#F6F5F3] text-2xl font-bold md:text-5xl">
          Click
        </span>
        <img className="w-16" src={star} alt="star icon" />
        <span className="text-[#F6F5F3] text-2xl font-bold md:text-5xl">
          Explore
        </span>
      </h2>
      <div
        className="relative w-full overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex items-stretch gap-2 mt-2 mb-2 md:gap-6 lg:gap-10">
          {work.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.01 }}
              className="flex-[0_0_calc(100%-16px)] md:flex-[0_0_calc(50%-32px)] lg:flex-[0_0_calc(33.33%-40px)] flex"
            >
              <a
                href={project.link}
                className="block w-full h-full"
              >
                <div className="flex flex-col h-full mx-2 frosted-card">
                  <img
                    className="object-cover w-full rounded-xl md:rounded-2xl lg:rounded-3xl"
                    src={project.image}
                    alt={project.title}
                  />
                  <p className="text-[#B794FF] flex gap-1 mt-2 md:mt-3 lg:mt-4 text-sm md:text-base">
                    <img src={star} alt="" className="w-4 md:w-5" />
                    Case Study
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white md:mt-3 lg:mt-4 md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-white md:mt-3 md:text-base">
                    {project.description}
                  </p>
                  <div className="pt-2 mt-auto">
                    <a
                      className="flex max-w-fit items-center py-1.5 md:py-2 px-3 md:px-4 gap-2 text-sm md:text-base lg:text-xl rounded-full bg-[#F95FE7]"
                      href="#"
                    >
                      <span className="text-white">{project.button}</span>
                      <img
                        className="w-4 md:w-6 lg:w-8"
                        src={arrow}
                        alt="arrow vector for button"
                      />
                    </a>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        {/* Arrow button at right */}
        <button
          className="absolute right-0 z-20 p-1 -translate-y-1/2 top-1/2"
          onClick={() => emblaApi && emblaApi.scrollNext()}
          aria-label="Next work"
          type="button"
        >
          <img src={polygon} alt="Next" className="w-6 h-6" />
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {work.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-[#F95FE7] w-4"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      </div>
      </div>
  );
};

export default WorkCarousel;
