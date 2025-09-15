import { motion } from "framer-motion";
import header from "../../assets/images/header-mockup.png";
import mockup1 from "../../assets/images/mockup1.png";
import mockup2 from "../../assets/images/mockup2.png";
import mockup3 from "../../assets/images/mockup3.png";
import mockup4 from "../../assets/images/mockup4.png";
import review1 from "../../assets/images/review1.png";
import review2 from "../../assets/images/review2.png";
import review3 from "../../assets/images/review3.png";
import userflow from "../../assets/images/user-flow.png";
import userflowmobile from "../../assets/images/user-flow.png";
import card1 from "../../assets/images/Card1.png";
import card2 from "../../assets/images/Card2.png";
import arrow from "../../assets/images/arrow.svg";
import footerimage from "../../assets/images/footer-p2.png";
import screenbefore1 from "../../assets/images/sb1.png";
import screenbefore2 from "../../assets/images/sb2.png";
import screenbefore3 from "../../assets/images/sb3.png";
import screenbefore4 from "../../assets/images/sb4.png";
import screenbefore5 from "../../assets/images/sb5.png";
import screenafter1 from "../../assets/images/sa1.png";
import screenafter2 from "../../assets/images/sa2.png";
import screenafter3 from "../../assets/images/sa3.png";
import screenafter4 from "../../assets/images/sa4.png";
import screenafter5 from "../../assets/images/sa5.png";
import hdfc from "../../assets/images/hdfc-logo.png";

const Project2 = () => {
  return (
    <div className="bg-white font-inter">
      <nav className="sticky top-0 z-50 p-4 md:p-6 font-inter text-[#040404]
     md:px-14 lg:px-24 2xl:px-32 bg-[#F0F0F0] shadow-lg">
      <div className="flex items-center space-x-[2rem] md:space-x-[5rem]">
        <a
          href="/"
          className="text-[#040404] text-md md:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Home
        </a>
        <a
          href="/Pragati-CreativeDesigner-Resume.pdf" target="_blank"
          className="text-[#040404] text-md md:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Resume
        </a>
        <a
          href="/#talk"
          className="text-[#040404] text-md md:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Let's Talk
          </a>
      </div>
      </nav>
      <section className="pb-10 2xl:pb-0 items-center justify-center pt-12 px-4 text-060709 bg-[#F8F8F8] xl:min-h-fit md:px-14 lg:px-24 2xl:px-32">
        <div className="grid grid-cols-1 h-fit md:grid-cols-6">
          <div className="flex flex-col col-span-4 gap-6">
            <h1 className="top-mar lg:mt-5 xl:mt-10 2xl:mt-20 text-3xl lg:text-4xl xl:text-[45px] 2xl:text-[52px] font-bold xl:leading-[5rem] lg:leading-[4rem] font-hiragino">
              UX Refresh for&nbsp; 
              <span className="text-[#004C8F] inline-block xl:leading-[5rem] lg:leading-[4rem] ">
                HDFC&nbsp;
              </span>
              <span className="inline-block  xl:leading-[5rem] lg:leading-[4rem] l">Bank</span>
            </h1>
            <h2 className="text-lg font-semibold md:text-xl xl:text-2xl font-inter">Reimagining the HDFC mobile app for better clarity, speed, and everyday usability.</h2>
            <p className="text-md lg:text-xl font-inter 2xl:mr-28">The HDFC Bank app is packed with features, but that power comes at the cost of cluttered screens, long flows, and an experience that typically overwhelms users. Not everyone is technologically intuitive. <br />This redesign simplifies key journeys like checking balances, paying credit card bills, and sending money without compromising on security or functionality.</p>
          </div>
          <div className="col-span-2">
            <img className="pt-10 md:py-0" src={header} alt=""/>
          </div>
        </div> 
      </section>
      <div className="xl:mt-[-9rem] flex flex-col md:flex-row gap-2 md:gap-0 items-center space-x-[0] md:space-x-[3rem] lg:space-x-[3.5rem] 2xl:space-x-[5rem] p-4 md:px-14 lg:px-24 2xl:px-32 font-inter
      bg-[linear-gradient(to_right,rgba(231,64,235,0.15)_0%,rgba(59,25,156,0.15)_100%)] shadow-2xs">
        <a
          href="#overviewp2"
          className="text-[#040404] text-md lg:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Overview (TL;DR)
        </a>
        <a
          href="#problemp2"
          className="text-[#040404] text-md lg:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Problem & Goal
        </a>
        <a
          href="#approachp2"
          className="text-[#040404] text-md lg:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          My Approach
        </a>
        <a
          href="#outcomep2"
          className="text-[#040404] text-md lg:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Outcome
        </a>
        <a
          href="#outcomep2"
          className="text-[#040404] text-md lg:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Aftermath
        </a>
      </div>
      <section id="overviewp2" className="items-center justify-center lg:pt-12 px-4 text-060709 bg-[#FFFFFF] xl:min-h-fit md:px-14 lg:px-24 2xl:px-32">
        <div className="grid grid-cols-12 h-fit">
          <div className="col-span-12 md:col-span-8">
            <p className="py-10 text-lg font-semibold md:text-xl xl:text-2xl font-inter">HDFC's mobile app is cluttered and hard to navigate for everyday users. This redesign focused on simplifying operations that are frequently carried out, like checking balances, sending money, and paying bills.<br /><br />The result is a cleaner, faster, and more intuitive experience for users of all tech levels.</p>
            <span className="text-lg md:text-xl xl:text-2xl font-semibold  font-inter text-[#003397]">Project Overview:</span>
            <ul className="pt-4 pl-8 list-disc">
              <li className="text-lg md:text-xl xl:text-2xl">
                <span className="font-bold">Problem:</span> Overwhelming UI and long user journeys
              </li>
              <li className="text-lg md:text-xl xl:text-2xl">
                <span className="font-bold ">Goal:</span> Make core tasks easier and faster
              </li>
              <li className="text-lg md:text-xl xl:text-2xl">
                <span className="font-bold">Outcome:</span> A streamlined, user-friendly app with smart shortcuts and improved accessibility
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 pt-20 md:gap-10 lg:gap-5 2xl:gap-0">
          <div className="flex items-center justify-center col-span-12 md:col-span-3">
            <img className="" src={mockup1} alt="" />
          </div>
          <div className="flex items-center justify-center col-span-12 md:col-span-3">
            <img src={mockup2} alt=""/>
          </div>
          <div className="flex items-center justify-center col-span-12 md:col-span-3">
            <img src={mockup3} alt="" />
          </div>
          <div className="flex items-center justify-center col-span-12 md:col-span-3">
            <img src={mockup4} alt="" />
          </div>
          </div>
      </section>
      <section id="problemp2" className=" pt-12 px-4 text-060709 bg-[#EDF6FF] xl:min-h-fit md:px-14 lg:px-24 2xl:px-32 pb-10">
        <div className="grid grid-cols-12 gap-4 pt-10 md:gap-10 lg:gap-0">
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
        <div className="grid grid-cols-12 pt-10">
          <div className="col-span-12 md:px-10 md:col-span-6">
            <h3 className="font-bold ">Problem Statement:</h3>
            <p className="pt-4">The HDFC Bank app feels outdated and hard to navigate, making it frustrating for users to complete basic banking tasks quickly and confidently.</p>
            <h3 className="pt-10 font-bold">Goals:</h3>
            <ul className="pl-10 list-disc">
              <li className="pt-2"><b>Simplify navigation</b> for core tasks like checking balance, sending money, and paying bills.</li>
              <li className="pt-2">Improve <b>visual clarity</b> through better hierarchy, spacing, and consistent UI elements.</li>
              <li className="pt-2">Prioritize frequently-used actions on the home screen for <b>quicker access.</b></li>
            </ul>
          </div>
          <div className="col-span-12 md:px-10 md:col-span-6 md:border-solid md:border-l-[3px] flex flex-col justify-center border-[#003397] border-opacity-[26%]">
            <h3 className="pt-10 font-bold lg:pt-0">What I've Found:</h3>
            <ul className="pl-10 list-disc">
              <li className="pt-2">Users often struggle with the visual and navigational clutter, leading to confusion and unnecessary effort while using the app.</li>
              <li className="pt-2">Core actions are not easily discoverable. Locating features like credit card payments suggest poor information architecture and low task visibility.</li>
              <li className="pt-2">The app's current flow feels inefficient and unintuitive, requiring users to tap around or rely on memory rather than clear guidance.</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="approachp2" className="items-center justify-center pt-12 px-4 text-[#060709] bg-[#FFFFFF] xl:min-h-fit md:px-14 lg:px-24 2xl:px-32">
        <h3 className="text-2xl font-bold ">User Personas</h3>
        <div className="grid grid-cols-12 gap-4 pt-10 md:gap-10 lg:gap-10">
          <div className="flex items-center justify-center col-span-12 md:col-span-6">
            <img className="w-full" src={card1} alt=""/>
          </div>
          <div className="flex items-center justify-center col-span-12 md:col-span-6">
           <img className="w-full" src={card2} alt=""/>
          </div>
          </div>
        <div className="flex flex-col items-center justify-center pb-16 ">
<div className="w-full">
            <h3 className="pt-10 text-2xl font-bold text-center">User Flow</h3>
            </div>
          <img className="hidden pt-10 md:flex w-[80%]" src={userflow} alt=""/>
          <img className="pt-4 md:hidden" src={userflowmobile} alt=""/>
        </div>
      </section>
      <section id="outcomep2" className="items-center justify-center pt-12 px-4 text-[#060709] bg-[#EDF6FF] xl:min-h-fit md:px-14 lg:px-24 2xl:px-32">
        <h2 className="pb-6 text-lg font-semibold lg:text-2xl ">What we currently have</h2>

          <div className="grid grid-cols-10">
            <div className="flex flex-col items-center col-span-2">
            <img className="" src={screenbefore1} alt="" />
            </div>
            <div className="flex flex-col items-center col-span-2">
            <img src={screenbefore2} alt="" />
            </div>
            <div className="flex flex-col items-center col-span-2">
            <img src={screenbefore3} alt="" />
            </div>
            <div className="flex flex-col items-center col-span-2">
              <img src={screenbefore4} alt=""/>
            </div>
            <div className="flex flex-col items-center col-span-2">
            <img src={screenbefore5} alt="" />
            </div>
          </div>
          <h2 className="pb-6 text-lg font-semibold pt-14 lg:text-2xl ">What we think it should be</h2>
          <div className="grid grid-cols-10">
            <div className="flex flex-col items-center col-span-2">
              <img className="" src={screenafter1} alt=""/>
            </div>
            <div className="flex flex-col items-center col-span-2">
              <img src={screenafter2} alt=""/>
            </div>
            <div className="flex flex-col items-center col-span-2">
              <img src={screenafter3} alt=""/>
            </div>
            <div className="flex flex-col items-center col-span-2">
              <img src={screenafter4} alt=""/>
            </div>
            <div className="flex flex-col items-center col-span-2">
              <img src={screenafter5} alt=""/>
            </div>
        </div>
        <div className="grid grid-cols-12 pt-6">
          <div className="flex items-end justify-center order-2 col-span-12 md:col-span-4 md:order-1">
            <img src={hdfc} alt=""/>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="py-10 text-white md:pt-0 md:col-span-3">
            <h3 className="pb-4 text-xl font-bold text-black pt-14">Features</h3>
            <div className="flex flex-col w-full gap-4 md:flex-row">
               <span className="flex md:text-sm xl:text-base items-center justify-center col-span-1 px-6 py-2 bg-[#003397] rounded-full">Hierarchy Fix</span>
               <span className="md:text-sm xl:text-base flex items-center justify-center col-span-2 px-6 py-2 bg-[#003397] rounded-full">Simplified Navigation Bar</span>
               <span className=" md:text-sm xl:text-base flex items-center justify-center col-span-1 px-6 py-2 bg-[#003397] rounded-full">Decluttered Layout</span>
               <span className="md:text-sm xl:text-base flex items-center justify-center col-span-2 px-6 py-2 bg-[#003397] rounded-full">Shortcuts</span>
              </div>
              <div className="flex flex-col w-full gap-4 pt-4 md:flex-row">
               <span className="md:text-sm xl:text-base flex items-center justify-center col-span-1 px-6 py-2 bg-[#003397] rounded-full">Streamlined Task Flows</span>
               <span className="md:text-sm xl:text-base flex items-center justify-center col-span-2 px-6 py-2 bg-[#003397] rounded-full">Clean, Intuitive UI</span>
               <span className="md:text-sm xl:text-base flex items-center justify-center col-span-1 px-6 py-2 bg-[#003397] rounded-full">Quick Actions</span>
               <span className="md:text-sm xl:text-base flex items-center justify-center col-span-2 px-6 py-2 bg-[#003397] rounded-full">Guided User Feedback</span>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section id="aftermathp2" className="pb-10 md:pb-0 relative grid grid-cols-8 bg-[#FFFFFF]">
        <div className="col-span-12 md:col-span-5 pt-12 lg:pt-0 lg:flex lg:flex-col lg:justify-center pl-4 text-[#060709] xl:min-h-fit md:pl-14 lg:pl-24 xl:pl-32">
          <h3 className="text-lg text-[#003397] font-bold lg:text-xl pt-10 pb-4 ">Reflections:</h3>
          <p className="text-lg lg:text-xl">This project showed me the <b>power of user feedback</b> in shaping meaningful design. I learned that <b>clarity and accessibility</b> matter more than feature overload, and even small changes in hierarchy or navigation can dramatically improve <b>user confidence.</b> Designing with empathy, especially for edge cases, helped me shift from just creating screens to <b>solving real user problems with purpose.</b></p>
          <h3 className="text-lg text-[#003397] font-bold lg:text-xl pt-10 pb-4 ">Takeaway:</h3>
          <p className="text-lg lg:text-xl"><b>This project reinforced my ability to turn raw feedback into structured design solutions that improve both user satisfaction and business impact.</b></p>
          <a className="mt-10 font-convergence flex max-w-fit py-2 px-4 gap-2 md:text-xl rounded-full bg-[#ED232A] hover:bg-[#ce1f25] md:mb-8" href="https://www.figma.com/proto/Rn9GAAELJSCmar4yHmrQpQ/Case-Studies?page-id=0%3A1&node-id=244-2777&viewport=-3263%2C-1903%2C0.72&t=VWCb0cEEprzagFlH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=244%3A2777" target="_blank">
           <span className="text-white">Prototype</span>
            <img className="w-6 md:w-8" src={arrow} alt="arrow vector for button" /></a>
        </div>
        <div className="flex h-full col-span-12 md:col-span-3">
          <img className="items-end hidden object-cover justify-self-end md:flex" src={footerimage} alt="footer laptop image"/>
        </div>
      </section>
      </div>
  );
};

export default Project2;