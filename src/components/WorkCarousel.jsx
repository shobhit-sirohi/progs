import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import "../App.css";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import star from "../assets/images/star-explore.svg";
import arrow from "../assets/images/arrow.svg";
import gradient1 from "../assets/images/gradient1.png";

const WorkCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
    skipSnaps: false,
    slidesToScroll: 1,
    containScroll: "keepSnaps",
    draggable: true,
    wheelEnabled: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const work = [
    {
      id: 1,
      title: "Name of the Project",
      description:
        "Pragati’s a design wizard and an even better human. Absolute vibe to work with and a natural leader who makes the whole team better.",
      image: project1,
      button: "See Work",
      link: "/projects/project1",
    },
    {
      id: 2,
      title: "Name of the Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet",
      image: project2,
      button: "See Work",
      link: "#",
    },
    {
      id: 3,
      title: "Name of the Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet",
      image: project3,
      button: "See Work",
      link: "#",
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
    src={gradient1}
    alt="Left gradient"
    className="absolute top-0 left-0 w-auto h-full max-w-none "
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
        <div className="flex gap-4 mt-2 mb-2 md:gap-8 lg:gap-14">
          {work.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.01 }}
              className="flex-[0_0_calc(100%-16px)] md:flex-[0_0_calc(50%-32px)] lg:flex-[0_0_calc(33.33%-40px)]"
            >
              <a
                href={project.link}
                className="block w-full h-full"
              >
                {/* <div className="w-full p-1 rounded-xl md:rounded-2xl lg:rounded-3xl ">
                  <div className="w-full p-4 backdrop-blur-[15px] bg-[linear-gradient(180deg,rgba(231,64,235,0.15)_0%,rgba(59,25,156,0.15)_100%)] md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl "> */}
                    <div className="frosted-card">
                    <img
                      className="object-cover w-full rounded-xl md:rounded-2xl lg:rounded-3xl"
                      src={project.image}
                      alt={project.title}
                    />
                    <p className="text-[#B794FF] flex gap-1 mt-2 md:mt-3 lg:mt-4 text-sm md:text-base">
                      <img
                        src={star}
                        alt=""
                        className="w-4 md:w-5"
                      />
                      Case Study
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-white md:mt-3 lg:mt-4 md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-white md:mt-3 md:text-base">
                      {project.description}
                    </p>
                    <a
                      className="flex max-w-fit items-center py-1.5 md:py-2 px-3 md:px-4 gap-2 text-sm md:text-base lg:text-xl mt-4 md:mt-5 rounded-full bg-[#F95FE7]"
                      href="#"
                    >
                      <span className="text-white">
                        {project.button}
                      </span>
                      <img
                        className="w-4 md:w-6 lg:w-8"
                        src={arrow}
                        alt="arrow vector for button"
                      />
                    </a>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
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
