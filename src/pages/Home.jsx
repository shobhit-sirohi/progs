import WorkCarousel from "../components/WorkCarousel";
import ReviewCarousel from "../components/ReviewCarousel";
import Chair from "../components/Chair";
import stars from "../assets/images/stars.svg";
import disk from "../assets/images/rotating-circle.svg";
import arrow from "../assets/images/arrow.svg";
import hero from "../assets/images/hero.png";
import footer from "../assets/images/footer-image.png";
import gmail from "../assets/images/gmail.png";

const Home = () => {
  return (
    <div>
      <section className="items-center justify-center px-4 text-white bg-black md:min-h-fit md:px-14 lg:px-24">
        <div className="w-full text-center ">
          <div className="flex items-center justify-center w-full pt-10">
            <img className="mr-4 lg:w-24 w-14" src={stars} alt="purple stars sticker" />
            <h1 className="text-3xl font-bold lg:text-8xl">
              Hi, I'm&nbsp;
              <span className="text-[#F95FE7]">
                Pragati&nbsp;
              </span>
              !
            </h1>
            <img
              className="hidden md:flex"
              src={disk}
              alt="pragati vishkwakarma resume"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center md:items-start md:order-1">
              <h2 className="pt-10 pb-4 text-2xl font-bold md:text-5xl md:pb-14">
                I see patterns. In products.
              </h2>
              <p className="pb-4 text-center md:text-start md:text-xl md:pb-7">
                I don’t just design screens — I throw
                colors, patterns, and a bit of chaos at them
                until they smile back :) UX is my
                playground, organizing is my superpower, and
                fun? That’s non-negotiable.
              </p>
              <span className="text-base md:text-xl italic text-[#D9C7FF] font-semibold pb-4 md:pb-14">
                Let’s make work that feels as good as a
                fresh box of crayons.
              </span>
              <a
                className="flex max-w-fit py-2 px-4 gap-2 md:text-xl rounded-full bg-[#F95FE7] md:mb-8"
                href="#"
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
      <section className="bg-black">
        <WorkCarousel />
        <Chair />
        <ReviewCarousel />
      </section>
      <section className="items-center justify-center px-4 bg-black md:min-h-fit md:px-14 lg:px-24">
        {/* footer starts here */}
        <div className="grid grid-cols-12 grid-rows-3 gap-4 p-4 pb-0">
          {/* Let's Chat - Row 1, col 1-5 */}
          <div className="flex flex-col items-center justify-center col-span-5 row-start-1 row-end-2 ">
            <h2 className="text-3xl font-bold text-white md:text-6xl">Let's&nbsp;
              <span className="text-[#F95FE7]">
                Chat
              </span>
              </h2>
            <div className="flex gap-2">
              <img src={gmail} alt="gmail icon" />
              <img src={gmail} alt="gmail icon" />
              <img src={gmail} alt="gmail icon" />
              <img src={gmail} alt="gmail icon" />
            </div>
          </div>
          {/* Disk - Row 1, col 6-7 */}
          <div className="flex items-center justify-center col-span-2 row-start-1 row-end-2">
            <img className="hidden md:flex" src={disk} alt="pragati vishkwakarma resume" />
          </div>
          {/* Footer Image - spans all 3 rows, col 8-12 */}
          <div className="flex items-center justify-center col-span-5 row-start-1 row-end-4 ">
            <img className="hidden md:flex" src={footer} alt="pragati vishkwakarma illustration" />
          </div>
          {/* "7" - Row 3, col 1-7 */}
          <div className="flex items-center justify-center h-24 col-span-7 row-start-3 row-end-4 text-sm ">
            <p className="text-[#FFFFFF80]">© 2025 Pragati. All rights reserved. Please don’t copy, steal, or “get inspired” a little too hard — I see you. Every pixel, brushstroke, and late-night idea here was made with too much coffee, too little sleep, and a whole lot of love. Respect the craft, share the vibes, and remember: creative karma is real. Deployed with 🩶 by <a className="hover:underline" href="https://shobhit.dev/" target="_blank">Shobhit</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
