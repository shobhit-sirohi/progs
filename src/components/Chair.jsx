import { motion } from "framer-motion";
import  mandala1  from "../assets/images/mandala1.png";
import  mandala2  from "../assets/images/mandala1.png";
import mandala3 from "../assets/images/mandala1.png";
import chair from "../assets/images/sitting-on-chair.png";
import chairText from "../assets/images/Chair-text.svg"; // Import the SVG

export default function Chair() {
  return (
    <section className="items-center justify-center px-4 text-white bg-black md:min-h-fit md:px-14 lg:px-24">
      <div className="relative w-full overflow-hidden h-[45rem]">
        {/* Center Girl's Image */}
        <img
          src={chair}
          alt="Girl Drawing"
          className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 w-lg top-1/2 left-1/2 "
        />

        {/* Floating Mandalas */}
        <div className="absolute z-20 top-[20rem] left-[3rem] md:w-[15rem] md:h-[15rem] frosted-mandala flex items-center justify-center overflow-hidden">
          <img
            src={mandala1}
            alt="Mandala"
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
        <div className="absolute z-20 top-4 right-[12rem] md:w-[17rem] md:h-[17rem] frosted-mandala flex items-center justify-center overflow-hidden">
          <img
            src={mandala2}
            alt="Mandala"
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
        <div className="absolute z-20 bottom-[8rem] right-[8rem] md:w-[10rem] md:h-[10rem] frosted-mandala flex items-center justify-center overflow-hidden">
          <img
            src={mandala3}
            alt="Mandala"
            className="w-[80%] h-[80%] object-contain"
          />
        </div>

        {/* Floating Text */}
        {/* <div className="absolute z-20 text-center text-white transform -translate-x-1/2 top-10 left-[15rem]">
          <p className="max-w-md text-lg italic md:text-xl">
            <span className="text-pink-400">I don't</span>{" "}
            do this all the time, but{" "}
            <span className="text-pink-300">when I do</span>
            , it's a{" "}
            <span className="text-pink-400">
              quiet space
            </span>{" "}
            just for me.
          </p>
        </div> */}
        {/* Floating Text SVG */}
        <img
          src={chairText}
          alt="I don't do this all the time, but when I do, it's a quiet space just for me."
          className="absolute z-20 max-w-md w-[250px] md:w-[350px] top-10 left-[15rem] transform -translate-x-1/2"
        />
      </div>
    </section>
  );
}
