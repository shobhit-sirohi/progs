import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import "../App.css";
import star from "../assets/images/Polygon10.png";
import sushri from "../assets/images/sushri.png";
import polygon from "../assets/images/polygon.svg";
import blackGradient from "../assets/images/black-gradient.png";
import blueGradient from "../assets/images/bottom-blue-gradient.png";

const ReviewCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
    skipSnaps: false,
    slidesToScroll: 1,
    //containScroll: "keepSnaps",
    draggable: true, // Enable mouse/touch dragging
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

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const reviews = [
    {
      id: 1,
      text: "Pragati’s a design wizard, an even better human, and a natural leader who lifts everyone around her — absolute vibe to work with.",
      author: "Shobhit Sirohi",
      image: sushri,
      designation: "Front-End Dev",
    },
    {
      id: 2,
      text: "Working with Pragati is easily the most fun and productive experience I’ve had! She’s always on top of things, isn’t afraid to express her ideas on how to improve designs, and has a keen eye for details at every step of the way. She’s chirpy, professional, and a go-getter. Can’t wait for the next collab!",
      author: "Abhishek K Patil",
       image: sushri,
      designation: "Product Marketing Lead",
    },
    {
      id: 3,
      text: "Pragati supported us in designing a comprehensive report, delivering everything on time and with great attention to detail. She handled multiple iterations with patience and efficiency. She’s an absolute pleasure to work with!",
      author: "Sushri Padhi",
       image: sushri,
      designation: "Associate",
    },
    {
      id: 4,
      text: "Pragati made my job easier. She’s proactive, dependable, and knows how to manage feedback without getting overwhelmed. What I appreciated the most was her calm approach in the face of tight deadlines, where she stayed focused and delivered great work.",
      author: "Gowtham Sai",
       image: sushri,
      designation: "Motion Graphic Designer",
    },
    {
      id: 5,
      text: "It was a great experience working with Pragati. She quickly understood all the concepts and requirements, delivering exactly what we needed. Fun to work with and a great asset to any team, I’d recommend her to anyone looking for a designer.",
      author: "Aditya Kumar",
       image: sushri,
      designation: "Co Founder, Inhouse Digtal",
    },
  ];

  return (
    <div className="relative flex flex-col items-center gap-4 px-4 pb-10 overflow-hidden md:px-14 lg:px-24">
      <h2 className="flex items-center pt-10 pb-4 md:pb-14">
              <span className="text-[#F6F5F3] text-2xl font-bold md:text-5xl">
                Not Just My Words
              </span>
              <img className="w-16" src={star} alt="star icon" />
              <span className="text-[#F6F5F3] text-2xl font-bold md:text-5xl">
                Proof I'm Not Making This Up
              </span>
            </h2>
      <div
        className="relative w-full overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex items-stretch gap-8 mt-2 mb-2">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              whileHover={{ scale: 1.01 }}
              className="flex-[0_0_calc(100%-16px)] md:flex-[0_0_calc(50%-32px)] lg:flex-[0_0_calc(33.33%-40px)] flex"
            >
              <div className="flex flex-col h-full mx-2 frosted-card">
                <p className="relative z-10 mb-2 text-base text-gray-300">
                  {review.text}
                </p>
                <div className="flex items-center justify-start gap-4 mt-auto"> 
                  <img src={review.image} alt=""/>
                  <div>
                    <p className="relative z-10 text-base font-bold text-white">
                      {review.author}
                    </p>
                    <span className="text-[#F95FE7]">
                      {review.designation}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Black gradient on the right */}
        <img
          src={blackGradient}
          alt=""
          className="absolute top-0 right-0 hidden w-auto h-full pointer-events-none select-none md:flex"
          style={{ zIndex: 10 }}
        />
        {/* Arrow button at right */}
        <button
          className="absolute z-20 p-2 -translate-y-1/2 rounded-full shadow-lg top-1/2 right-2"
          onClick={scrollNext}
          aria-label="Next review"
          type="button"
        >
          <img src={polygon} alt="Next" className="w-6 h-6" />
        </button>
      </div>

      <div className="flex gap-2 mt-4">
        {reviews.map((_, index) => (
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
      {/* Bottom blue gradient */}
      <img
        src={blueGradient}
        alt=""
        className="absolute lg:bottom-[-750px] left-0 w-full pointer-events-none select-none"
        style={{ zIndex: 0 }}
      />
    </div>
  );
};

export default ReviewCarousel;
