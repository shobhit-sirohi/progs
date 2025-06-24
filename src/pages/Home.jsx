import WorkCarousel from "../components/WorkCarousel";
import ReviewCarousel from "../components/ReviewCarousel";
import Chair from "../components/Chair";

const Home = () => {
  return (
    <div>
      <section className="items-center justify-center px-4 text-white bg-black md:min-h-fit md:px-14 lg:px-24">
        <div className="w-full text-center ">
          <div className="flex items-center justify-center w-full pt-10">
            <img
              className="w-14"
              src="./src/assets/images/stars.svg"
              alt=""
            />
            <h1 className="text-3xl font-bold lg:text-8xl">
              Hi, I'm&nbsp;
              <span className="text-[#F95FE7]">
                Pragati&nbsp;
              </span>
              !
            </h1>
            <img
              className="hidden md:flex "
              src="./src/assets/images/rotating-circle.svg"
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
                  src="./src/assets/images/arrow.svg"
                  alt="arrow vector for button"
                />
              </a>
            </div>
            <div className="pt-6 md:pt-0">
              <img
                className="md:w-full lg:pr-10 md:order-0"
                src="./src/assets/images/hero.png"
                alt="Pragati Vishwakarma Illustration Designer"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray">
        <WorkCarousel />
        <Chair />
        <ReviewCarousel />
      </section>
      <section className="items-center justify-center px-4 bg-black md:min-h-fit md:px-14 lg:px-24">
        {/* footer starts here */}
        <div className="grid grid-cols-12 gap-4 p-4">
          {/* First Row */}
          <div className="flex flex-col items-center justify-center col-span-12 bg-gray-200 h-fit md:col-span-5">
            <h2 className="text-2xl font-bold md:text-5xl">
              Let's Chat.
            </h2>
            <div className="flex gap-2">
              <img
                src="./src/assets/images/gmail.png"
                alt="gmail icon"
              />
              <img
                src="./src/assets/images/gmail.png"
                alt="gmail icon"
              />
              <img
                src="./src/assets/images/gmail.png"
                alt="gmail icon"
              />
              <img
                src="./src/assets/images/gmail.png"
                alt="gmail icon"
              />
            </div>
          </div>
          <div className="flex items-center justify-center col-span-12 bg-gray-300 h-fit md:col-span-2">
            <img
              className="hidden md:flex "
              src="./src/assets/images/rotating-circle.svg"
              alt="pragati vishkwakarma resume"
            />
          </div>
          <div className="flex items-center justify-center h-auto col-span-12 bg-gray-200 md:col-span-5">
            <img
              className="hidden md:flex "
              src="./src/assets/images/footer-image.png"
              alt="pragati vishkwakarma illustration"
            />
          </div>

          {/* Second Row */}
          <div className="flex items-center justify-center h-24 col-span-12 bg-gray-400 md:col-span-7">
            7
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
