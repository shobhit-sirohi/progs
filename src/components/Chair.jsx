import { motion } from "framer-motion";

export default function Chair() {
  return (
    <section className="items-center justify-center px-4 text-white bg-black md:min-h-fit md:px-14 lg:px-24">
      <div className="relative w-full h-[500px] overflow-hidden">
        {/* Center Girl's Image */}
        <img
          src="./src/assets/images/sitting-on-chair.png"
          alt="Girl Drawing"
          className="absolute z-10 w-48 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:w-64"
        />

        {/* Floating Mandalas */}
        <img
          src="./src/assets/images/mandala1.png"
          alt="Mandala"
          className="absolute z-20 w-24 h-24 top-4 left-4 md:w-32 md:h-32"
        />
        <img
          src="./src/assets/images/mandala1.png"
          alt="Mandala"
          className="absolute z-20 w-24 h-24 top-4 right-4 md:w-32 md:h-32"
        />
        <img
          src="./src/assets/images/mandala1.png"
          alt="Mandala"
          className="absolute z-20 w-20 h-20 bottom-4 right-8 md:w-28 md:h-28"
        />

        {/* Floating Text */}
        <div className="absolute z-20 text-center text-white transform -translate-x-1/2 top-10 left-1/2">
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
        </div>
      </div>
    </section>
  );
}
