import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import "../App.css";
import star from "../assets/images/star-explore.svg";

const ReviewCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
    skipSnaps: false,
    slidesToScroll: 1,
    containScroll: "keepSnaps",
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

  const reviews = [
    {
      id: 1,
      text: "Great work!",
      author: "Client 1",
    },
    {
      id: 2,
      text: "Great work!",
      author: "Client 2",
    },
    {
      id: 3,
      text: "Great work!",
      author: "Client 3",
    },
    {
      id: 4,
      text: "Great work!",
      author: "Client 4",
    },
    {
      id: 5,
      text: "Great work!",
      author: "Client 5",
    },
    {
      id: 6,
      text: "Great work!",
      author: "Client 6",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 px-4 md:px-14 lg:px-24">
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
        <div className="flex gap-8 mt-2 mb-2">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              whileHover={{ scale: 1.01 }}
              className="flex-[0_0_calc(100%-16px)] md:flex-[0_0_calc(50%-32px)] lg:flex-[0_0_calc(33.33%-40px)]"
            >
              <div className="frosted-card">
                <span className="relative z-10">
                  Case Study
                </span>
                <p className="relative z-10 mb-2 text-gray-300">
                  "{review.text}"
                </p>
                <p className="relative z-10 font-bold text-white">
                  - {review.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
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
    </div>
  );
};

export default ReviewCarousel;
