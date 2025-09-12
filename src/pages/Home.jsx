import WorkCarousel from "../components/WorkCarousel";
import ReviewCarousel from "../components/ReviewCarousel";
import Navbar from "../components/Navbar";
import Chair from "../components/Chair";
import stars from "../assets/images/stars.svg";
import disk from "../assets/images/rotating-circle.png";
import arrow from "../assets/images/arrow.svg";
import hero from "../assets/images/hero.png";
import footer from "../assets/images/footer-image.png";
import gmail from "../assets/images/gmail 2.png";
import instagram from "../assets/images/Instagram 1.png";
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
      <Navbar />
      <section className="flex items-center justify-between px-4 text-white bg-black min-h-lg-screen md:px-14 lg:px-24" >
        {/* style={{ minHeight: 'calc(100vh - var(--nav-height, 0px))' }} */}
        <div className="w-full text-center ">
          <div className="relative flex items-center justify-center w-full pt-8 md:pt-16 xl:pt-20">
            <img className="hidden mr-4 md-flex lg:w-24 w-14" src={stars} alt="purple stars sticker" />
            <h1 className="relative text-3xl md:text-5xl font-bold lg:text-[60px] xl:text-[80px] font-hiragino">
              Hi, I'm&nbsp;
              <span className="text-[#F95FE7]">
                Pragati&nbsp;
              </span>
              <span className="relative inline-block">!</span>
              <a href="/Pragati-CreativeDesigner-Resume.pdf" target="_blank" rel="noopener noreferrer" title="View Pragati's Resume">
              <motion.img
                  className="absolute cursor-pointer w-24 lg:w-[130px] xl:w-[150px] "
                style={{left:"98%", top: "6%", transform:"translate(-50%, -50%)", zIndex: 10}}
              src={disk}
                alt="pragati vishkwakarma resume"
                animate={{ rotate: 360 }}
                transition={{repeat: Infinity, duration: 20, ease: "linear"}}
            /></a>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center md:items-start md:order-1">
              <h2 className="pt-14 pb-2 text-2xl font-bold font-hiragino lg:text-[35px] xl:text-[40px] lg:pb-10 flex flex-col 2xl:flex-row md:gap-2">
                I see patterns:
                <span className="inline-block md:flex">
                  In {text}
                </span>
              </h2>
              <p className="text-center font-inter text-[1rem] xl:pr-20 md:text-start lg:text-[18px] xl:text-[20px]">
                I do more than just design screens. I throw colors, textures, and a little chaos at them until they smile back. :)
              </p>
              <p className="pb-4 text-center font-inter text-[1rem] xl:pr-20 lg:text-[18px] xl:text-[20px] md:text-start md:pb-7">
                 UX is my playground, and organizing is my superpower. And when it comes to having fun? That's non-negotiable.
              </p>
              <span className="font-inter text-base md:text-start text-[1rem] lg:text-[18px] xl:text-[21px] italic text-[#D9C7FF] font-semibold pb-4 md:pb-10 xl:pb-14">
                Let's create something that feels as fresh as a new box of crayons.
              </span>
              <a
                className="font-convergence flex max-w-fit py-2 px-4 gap-2 lg:text-xl rounded-full bg-[#F95FE7] hover:bg-[#b544a7] md:mb-8"
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
            <div className="flex items-center justify-center pt-6 md:pt-0">
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
      <section id="talk" className="items-center justify-center px-4 pt-4 bg-black md:min-h-fit md:px-14 lg:px-24">
        {/* footer starts here */}
        <div className="hidden grid-cols-12 grid-rows-3 gap-4 p-4 pb-0 lg:grid ">
          {/* Let's Chat - Row 1, col 1-5 */}
          <div className="flex-col justify-center col-span-5 row-start-1 row-end-2 lg:flex ">
            <h2 className=" font-bold text-white text-[50px] xl:text-[75px]">Let's&nbsp;
              <span className="text-[#F95FE7]">
                Chat.
              </span>
              </h2>
          </div>
          <div className="flex items-start col-span-5 row-start-2 row-end-3 gap-4 xl:gap-8">
              <a href="mailto:pragativishwakarma.work@gmail.com"><img className=" w-[50px] xl:w-[70px]" src={gmail} alt="gmail icon" /></a>
              <a href="https://www.linkedin.com/in/pragati-vishwakarma-886372194/" target="_blank"><img className="w-[50px] xl:w-[70px]" src={linkedin} alt="linkedin icon" /></a>
              <a href="#"><img className="w-[50px] xl:w-[70px]" src={behance} alt="behance icon" /></a>
              <a href="https://www.instagram.com/pragati.irl/" target="_blank"><img  className="w-[50px] xl:w-[70px]" src={instagram} alt="instagram icon" /></a>
          </div>
          {/* Disk - Row 1, col 6-7 */}
          <div className="relative flex items-start col-span-2 row-start-1 row-end-3 mt-8">
  <a 
    href="/Pragati-CreativeDesigner-Resume.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
    title="View Pragati's Resume"
  >
              <motion.img
    className="w-[140px] xl:w-[160px]"
    src={disk}
    alt="pragati vishkwakarma resume"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    style={{ zIndex: 10 }}
              /></a>
            <a 
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=pragativishwakarma.work@gmail.com&su=Let's%20Chat%20with%20Pragati&body=${encodeURIComponent(`
    <div style="font-family: Arial, sans-serif; max-width: 600px;">
      <div style="background-color: #2D2D2D; padding: 20px; border-radius: 15px 15px 0 0;">
        <h2 style="color: #F95FE7; margin: 0; font-size: 24px;">Hey Pragati!</h2>
      </div>
      <div style="background-color: #3D3D3D; padding: 20px; border-radius: 0 0 15px 15px;">
        <p style="color: #ffffff; font-size: 16px;">Here are my two cents:</p>
        <p style="color: #D9C7FF; font-style: italic; padding: 15px; background-color: #2D2D2D; border-radius: 10px; border-left: 4px solid #F95FE7;">
          [Your message here]
        </p>
        <p style="color: #ffffff; font-size: 14px; margin-top: 20px;">Looking forward to connecting!</p>
        <hr style="border: 1px solid #4D4D4D; margin: 20px 0;">
        <p style="color: #AAAAAA; font-size: 12px;">Sent from your portfolio chat sticker ✨</p>
      </div>
    </div>
  `)}`}
  title="Start a chat with Pragati"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    className="flex w-[140px] xl:w-[160px] chat-sticker"
    src={chatSticker}
    alt="lets chat sticker by pragati"
    onMouseOver={(e) => e.currentTarget.style.transform = "rotate(-15deg) translateY(5%) scale(1.05)"}
    onMouseOut={(e) => e.currentTarget.style.transform = "rotate(-12deg) translateY(10%) translateY(-10%)"}
  />
</a>
</div>
          {/* Footer Image - spans all 3 rows, col 8-12 */}
          <div className="flex items-center justify-center col-span-5 row-start-1 row-end-4 ">
            <img className=" lg:flex" src={footer} alt="pragati vishkwakarma illustration" />
          </div>
          {/* "7" - Row 3, col 1-7 */}
          <div className="flex items-center justify-center h-24 col-span-12 row-start-3 row-end-4 text-xs lg:col-span-7 xl:text-sm ">
            <p className="text-[#FFFFFF80]">© 2025 Pragati. All rights reserved. Please don’t copy, steal, or “get inspired” a little too hard — I see you. Every pixel, brushstroke, and late-night idea here was made with too much coffee, too little sleep, and a whole lot of love. Respect the craft, share the vibes, and remember: creative karma is real. Shipped by <a className="hover:underline" href="https://shobhit.dev/" target="_blank">Shobhit.</a></p>
          </div>
        </div>
        <div className="grid grid-cols-12 lg:hidden">
          <div className="flex flex-col col-span-8">
            <div>
          <h2 className=" font-bold text-white text-[28px] sm:text-[35px] md:text-[40px]">Let's&nbsp;
              <span className="text-[#F95FE7]">
                Chat.
              </span>
          </h2>
            </div>
            <div className="flex items-start gap-2 pt-4 sm:gap-4 md:gap-6">
              <a href="mailto:pragativishwakarma.work@gmail.com"><img className="w-[38px] sm:w-[45px] md:w-[60px]" src={gmail} alt="gmail icon" /></a>
              <a href="https://www.linkedin.com/in/pragati-vishwakarma-886372194/" target="_blank"><img className="w-[38px] sm:w-[45px] md:w-[60px]" src={linkedin} alt="linkedin icon" /></a>
              <a href="#"><img className="w-[38px] sm:w-[45px] md:w-[60px]" src={behance} alt="behance icon" /></a>
              <a href="https://www.instagram.com/pragati.irl/" target="_blank"><img  className="w-[38px] sm:w-[45px] md:w-[60px]" src={instagram} alt="instagram icon" /></a>
            </div>
            <div className="flex items-center justify-center sm:pt-6 pt-4 text-[10px] sm:text-sm">
            <p className="text-[#FFFFFF80]">© 2025 Pragati. All rights reserved. Please don’t copy, steal, or “get inspired” a little too hard — I see you. Every pixel, brushstroke, and late-night idea here was made with too much coffee, too little sleep, and a whole lot of love. Respect the craft, share the vibes, and remember: creative karma is real. Shipped by <a className="hover:underline" href="https://shobhit.dev/" target="_blank">Shobhit.</a></p>
          </div>
          </div>
          <div className="col-span-4">
<div className="relative flex items-center justify-center">
  <a 
    href="/Pragati-CreativeDesigner-Resume.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
    title="View Pragati's Resume"
  >
              <motion.img
    className="w-[120px] md:w-[140px] mt-10"
    src={disk}
    alt="pragati vishkwakarma resume"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    style={{ zIndex: 10 }}
              /></a>
            <a 
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=pragativishwakarma.work@gmail.com&su=Let's%20Chat%20with%20Pragati&body=${encodeURIComponent(`
    <div style="font-family: Arial, sans-serif; max-width: 600px;">
      <div style="background-color: #2D2D2D; padding: 20px; border-radius: 15px 15px 0 0;">
        <h2 style="color: #F95FE7; margin: 0; font-size: 24px;">Hey Pragati!</h2>
      </div>
      <div style="background-color: #3D3D3D; padding: 20px; border-radius: 0 0 15px 15px;">
        <p style="color: #ffffff; font-size: 16px;">Here are my two cents:</p>
        <p style="color: #D9C7FF; font-style: italic; padding: 15px; background-color: #2D2D2D; border-radius: 10px; border-left: 4px solid #F95FE7;">
          [Your message here]
        </p>
        <p style="color: #ffffff; font-size: 14px; margin-top: 20px;">Looking forward to connecting!</p>
        <hr style="border: 1px solid #4D4D4D; margin: 20px 0;">
        <p style="color: #AAAAAA; font-size: 12px;">Sent from your portfolio chat sticker ✨</p>
      </div>
    </div>
  `)}`}
  title="Start a chat with Pragati"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    className="flex w-[120px] md:w-[140px] chat-sticker-mb"
    src={chatSticker}
    alt="lets chat sticker by pragati"
    onMouseOver={(e) => e.currentTarget.style.transform = "rotate(-15deg) translateY(5%) scale(1.05)"}
    onMouseOut={(e) => e.currentTarget.style.transform = "rotate(-12deg) translateY(10%) translateY(-10%)"}
  />
</a>
</div>
          </div>
            <div className="flex items-center justify-center col-span-12">
            <img className="" src={footer} alt="pragati vishkwakarma illustration" />
          </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
