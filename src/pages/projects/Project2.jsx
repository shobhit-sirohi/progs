import { motion } from "framer-motion";
import header from "../../assets/images/header-mockup.png";
import mockup1 from "../../assets/images/mockup1.png";
import mockup2 from "../../assets/images/mockup2.png";
import mockup3 from "../../assets/images/mockup3.png";
import review1 from "../../assets/images/review1.png";
import review2 from "../../assets/images/review2.png";
import review3 from "../../assets/images/review3.png";
import userflow from "../../assets/images/user-flow.png";
import userflowmobile from "../../assets/images/user-flow.png";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import arrow from "../../assets/images/arrow.svg";
import footerimage from "../../assets/images/footer-p2.png";
import footerdiskimagemobile from "../../assets/images/footerdiskimagemobile.png";
import disk from "../../assets/images/rotating-circle.png";

const Project2 = () => {
  return (
    <div className="bg-white font-inter">
      <nav className="sticky top-0 z-50 p-4 md:p-6 font-inter text-[#040404]
     md:px-32 bg-[#F0F0F0] shadow-lg">
      <div className="flex items-center space-x-[2rem] md:space-x-[5rem]">
        <a
          href="/"
          className="text-[#040404] text-md md:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Home
        </a>
        <a
          href="#work"
          className="text-[#040404] text-md md:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Resume
        </a>
        <a
          href="#talk"
          className="text-[#040404] text-md md:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Let's Talk
        </a>
      </div>
      </nav>
      <section className="pb-10 2xl:pb-0 items-center justify-center pt-12 px-4 text-060709 bg-[#F8F8F8] xl:min-h-fit md:px-14 lg:px-24">
        <div className="grid grid-cols-1 h-fit md:grid-cols-6">
          <div className="flex flex-col col-span-4 gap-6">
            <h1 className="2xl:mt-20 text-3xl font-bold xl:leading-[5rem] xl:text-6xl lg:leading-[4rem] lg:text-4xl font-hiragino">
              UX Refresh for&nbsp; 
              <span className="text-[#004C8F] inline-block xl:leading-[5rem] xl:text-6xl lg:leading-[4rem] lg:text-4xl">
                HDFC&nbsp;
              </span>
              <span className="inline-block text-3xl xl:leading-[5rem] xl:text-6xl lg:leading-[4rem] lg:text-4xl">Bank</span>
            </h1>
            <h2 className="text-xl font-semibold xl:text-2xl font-inter">Reimagining the HDFC mobile app for better clarity, speed, and everyday usability.</h2>
            <p className="text-md lg:text-xl font-inter xl:mr-28">The HDFC Bank app is packed with features, but that power comes at the cost of cluttered screens, long flows, and an experience that typically overwhelms users. Not everyone is technologically intuitive. <br/>This redesign simplifies key journeys like checking balances, paying credit card bills, and sending money without compromising on security or functionality.</p>
          </div>
          <div className="col-span-2">
            <img className="pt-10 md:py-0" src={header} alt=""/>
          </div>
        </div> 
      </section>
      <div className="xl:mt-[-9rem] flex flex-col md:flex-row gap-2 md:gap-0 items-center space-x-[0] md:space-x-[3rem] lg:space-x-[5rem] p-4 md:px-14 lg:px-24 font-inter
      bg-[linear-gradient(to_right,rgba(231,64,235,0.15)_0%,rgba(59,25,156,0.15)_100%)] shadow-2xs">
        <a
          href="#overview"
          className="text-[#040404] text-md md:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Overview (TL;DR)
        </a>
        <a
          href="#problem"
          className="text-[#040404] text-md md:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Problem & Goal
        </a>
        <a
          href="#approach"
          className="text-[#040404] text-md md:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          My Approach
        </a>
        <a
          href="#outcome"
          className="text-[#040404] text-md md:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Outcome
        </a>
      </div>
      <section className="items-center justify-center lg:pt-12 px-4 text-060709 bg-[#FFFFFF] xl:min-h-fit md:px-14 lg:px-24">
        <div className="grid grid-cols-12 h-fit">
          <div className="col-span-12 md:col-span-8">
            <p className="py-10 text-xl font-semibold xl:text-2xl font-inter">HDFC's mobile app is cluttered and hard to navigate for everyday users. This redesign focused on simplifying operations that are frequently carried out, like checking balances, sending money, and paying bills.<br /><br />The result is a cleaner, faster, and more intuitive experience for users of all tech levels.</p>
            <span className="text-xl font-semibold xl:text-2xl font-inter text-[#003397]">Project Overview:</span>
            <ul className="pt-4 pl-8 list-disc">
              <li className="text-xl">
                <span className="font-bold">Problem:</span> Overwhelming UI and long user journeys
              </li>
              <li className="text-xl">
                <span className="font-bold ">Goal:</span> Make core tasks easier and faster
              </li>
              <li className="text-xl">
                <span className="font-bold">Outcome:</span> A streamlined, user-friendly app with smart shortcuts and improved accessibility
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-10 pt-10 lg:gap-0">
          <div className="flex items-center justify-center col-span-12 md:col-span-4">
            <img className="" src={mockup1} alt="" />
          </div>
          <div className="flex items-center justify-center col-span-12 md:col-span-4">
            <img src={mockup2} alt=""/>
          </div>
          <div className="flex items-center justify-center col-span-12 md:col-span-4">
            <img src={mockup3} alt="" />
          </div>
          </div>
      </section>
      <section className=" pt-12 px-4 text-060709 bg-[#EDF6FF] xl:min-h-fit md:px-14 lg:px-24 pb-10">
        <div className="grid grid-cols-12 gap-10 pt-10 lg:gap-0">
          <div className="flex items-center justify-center col-span-12 md:col-span-4">
            <img className="" src={review1} alt="" />
          </div>
          <div className="flex items-center justify-center col-span-12 md:col-span-4">
            <img src={review2} alt="" />
          </div>
          <div className="flex items-center justify-center col-span-12 md:col-span-4">
            <img src={review3} alt="" />
          </div>
          </div>
        
        <div className="flex flex-col justify-between lg:flex-row">
          <div>
            problem statement
          </div>
          <div>
           what i found
          </div>
        </div>
      </section>
      <section className="items-center justify-center pt-12 px-4 text-[#060709] bg-[#FFFFFF] xl:min-h-fit md:px-14 lg:px-24">
        <h3 className="text-2xl font-bold ">User Personas</h3>
        <div className="grid grid-cols-12 gap-10 pt-10 lg:gap-0">
          <div className="flex items-center justify-center col-span-12 md:col-span-6">
            <img className="" src={card1} alt=""/>
          </div>
          <div className="flex items-center justify-center col-span-12 md:col-span-6">
           <img className="" src={card2} alt=""/>
          </div>
          </div>
        <div className="flex flex-col items-center justify-center gap-20 pb-16 lg:flex-row ">
          
          
        </div>
        <div className="flex flex-col items-center justify-center pb-16 ">
          <h3 className="text-2xl font-bold ">User Flow</h3>
          <img className="hidden md:flex" src={userflow} alt=""/>
          <img className="md:hidden" src={userflowmobile} alt=""/>
        </div>
      </section>
      <section className="relative grid grid-cols-8 bg-[#F0F0F0]">
        <div className="col-span-12 md:col-span-4 pt-12 pl-4 text-[#060709] xl:min-h-fit md:pl-14 lg:pl-24">
          <span className="text-lg font-semibold lg:text-xl">I’d love for you to see for yourself!</span>
          <a className="mt-4 font-convergence flex max-w-fit py-2 px-4 gap-2 md:text-xl rounded-full bg-[#F95FE7] hover:bg-[#b544a7] md:mb-8" href="/">
           <span className="text-white">Live Site</span>
            <img className="w-6 md:w-8" src={arrow} alt="arrow vector for button" /></a>
        </div>
        <div className="col-span-12 md:col-span-4">
          <a href="/Pragati-CreativeDesigner-Resume.pdf" target="_blank" rel="noopener noreferrer" title="View Pragati's Resume">
              <motion.img
              className="absolute cursor-pointer  w-24 lg:w-[130px] xl:w-[150px] "
                 src={disk}
                alt="pragati vishkwakarma resume"
                animate={{ rotate: 360 }}
                transition={{repeat: Infinity, duration: 20, ease: "linear"}}
            /></a>
          <img className="hidden md:flex" src={footerimage} alt="footer laptop image"/>
          <img className="md:hidden" src={footerdiskimagemobile} alt="footer laptop image mobile"/>
        </div>
      </section>
      </div>
  );
};

export default Project2;
