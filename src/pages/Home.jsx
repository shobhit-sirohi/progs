import WorkCarousel from "../components/WorkCarousel";
import ReviewCarousel from "../components/ReviewCarousel";
import Chair from "../components/Chair";
import stars from "../assets/images/stars.svg";
import disk from "../assets/images/rotating-circle.png";
import arrow from "../assets/images/arrow.svg";
import hero from "../assets/images/hero.png";
import footer from "../assets/images/footer-image.png";
import gmail from "../assets/images/gmail 2.png";
import instagram from "../assets/images/instagram 1.png";
import behance from "../assets/images/Behance 1.png";
import linkedin from "../assets/images/Linkedin 1.png";
import chatSticker from "../assets/images/testimonial-sticker.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const changingWords = ["products.", "pixels.", "people."];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  
  useEffect(() => {
    const word = changingWords[index];
    const typingSpeed = 100; // Speed of typing/deleting (in ms)

    const type = () => {
      if (!isDeleting) {
        // Typing
        if (text.length < word.length) {
          setText(word.slice(0, text.length + 1));
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 700);
        }
      } else {
        // Deleting
        if (text.length > 0) {
          setText(word.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % changingWords.length);
        }
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <div>
      <section className="items-center justify-center px-4 text-white bg-black xl:min-h-fit 2xl:min-h-screen md:px-14 lg:px-24">
        <div className="w-full text-center ">
          <div className="relative flex items-center justify-center w-full pt-20">
            <img className="mr-4 lg:w-24 w-14" src={stars} alt="purple stars sticker" />
            <h1 className="relative text-3xl font-bold lg:text-[80px] font-hiragino">
              Hi, I'm&nbsp;
              <span className="text-[#F95FE7]">
                Pragati&nbsp;
              </span>
              <span className="relative inline-block">!</span>
              <a 
    href="/Pragati-CreativeDesigner-Resume.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
    title="View Pragati's Resume"
  >
              <motion.img
                className="absolute hidden cursor-pointer md:flex w-26 lg:w-[150px] "
                style={{left:"96%", top: "5%", transform:"translate(-50%, -50%)", zIndex: 10}}
              src={disk}
                alt="pragati vishkwakarma resume"
                animate={{ rotate: 360 }}
                transition={{repeat: Infinity, duration: 20, ease: "linear"}}
            /></a>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center md:items-start md:order-1">
              <h2 className="flex gap-2 pt-10 pb-2 text-2xl font-bold font-hiragino md:text-[40px] md:pb-10">
                I see patterns: In
                <span className="flex">
                  {text}
                </span>
              </h2>
              <p className="text-center font-inter lg:pr-20 md:text-start md:text-[20px]">
                I do more than just design screens. I throw colors, textures, and a little chaos at them until they smile back. :)
              </p>
              <p className="pb-4 text-center font-inter lg:pr-20 md:text-start md:text-xl md:pb-7">
                 UX is my playground, and organizing is my superpower. And when it comes to having fun? That's non-negotiable.
              </p>
              <span className="font-inter text-base md:text-[21px] italic text-[#D9C7FF] font-semibold pb-4 md:pb-14">
                Let's create something that feels as fresh as a new box of crayons.
              </span>
              <a
                className="font-convergence flex max-w-fit py-2 px-4 gap-2 md:text-xl rounded-full bg-[#F95FE7] md:mb-8"
                href="#work"
              >
                <span>See Work</span>
                <img
                  className="w-6 md:w-8"
                  src={arrow}
                  alt="arrow vector for button"
                />
              </a>
            </div>
            <div className="pt-6 md:pt-0">
              <img
                className="md:w-full lg:pr-10 md:order-0"
                src={hero}
                alt="Pragati Vishwakarma Illustration Designer"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black" id="work" >
        <WorkCarousel />
        <Chair />
        <ReviewCarousel />
      </section>
      <section className="items-center justify-center px-4 pt-4 bg-black md:min-h-fit md:px-14 lg:px-24">
        {/* footer starts here */}
        <div className="grid grid-cols-12 grid-rows-3 gap-4 p-4 pb-0">
          {/* Let's Chat - Row 1, col 1-5 */}
          <div className="flex flex-col justify-center col-span-5 row-start-1 row-end-2 ">
            <h2 className="text-[70px] font-bold text-white md:text-7xl">Let's&nbsp;
              <span className="text-[#F95FE7]">
                Chat.
              </span>
              </h2>
          </div>
          <div className="flex items-start col-span-5 row-start-2 row-end-3 gap-10">
              <a href="mailto:pragativishwakarma.work@gmail.com"><img className="w-[70px]" src={gmail} alt="gmail icon" /></a>
              <a href="https://www.linkedin.com/in/pragati-vishwakarma-886372194/" target="_blank"><img className="w-[70px]" src={linkedin} alt="linkedin icon" /></a>
              <a href="#"><img className="w-[70px]" src={behance} alt="behance icon" /></a>
              <a href="https://www.instagram.com/pragati.irl/" target="_blank"><img  className="w-[70px]" src={instagram} alt="instagram icon" /></a>
            </div>
          {/* Disk - Row 1, col 6-7 */}
          <div className="relative flex items-start col-span-2 row-start-1 row-end-3 mt-8 m">
  <a 
    href="/Pragati-CreativeDesigner-Resume.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
    title="View Pragati's Resume"
  >
              <motion.img
    className="hidden md:flex w-26 lg:w-[160px]"
    src={disk}
    alt="pragati vishkwakarma resume"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    style={{ zIndex: 10 }}
  /></a>
  <img
    className="hidden md:flex w-40 lg:w-[170px] rotate-[-12deg]"
    src={chatSticker}
    alt="lets chat sticker by pragati"
    style={{
      position: "absolute",
      left: -112,
      bottom: 77,
      zIndex: 11,
      transform: "rotate(-12deg) translateY(10%) translateY(-10%)"
    }}
  />
</div>
          {/* Footer Image - spans all 3 rows, col 8-12 */}
          <div className="flex items-center justify-center col-span-5 row-start-1 row-end-4 ">
            <img className="hidden md:flex" src={footer} alt="pragati vishkwakarma illustration" />
          </div>
          {/* "7" - Row 3, col 1-7 */}
          <div className="flex items-center justify-center h-24 col-span-7 row-start-3 row-end-4 text-sm ">
            <p className="text-[#FFFFFF80]">© 2025 Pragati. All rights reserved. Please don’t copy, steal, or “get inspired” a little too hard — I see you. Every pixel, brushstroke, and late-night idea here was made with too much coffee, too little sleep, and a whole lot of love. Respect the craft, share the vibes, and remember: creative karma is real. Shipped by <a className="hover:underline" href="https://shobhit.dev/" target="_blank">Shobhit.</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
