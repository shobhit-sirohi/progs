import { motion } from "framer-motion";
import header from "../../assets/images/Portfolio Header Mockup.png";
import section2 from "../../assets/images/Laptop-iphone mockup-section-1.png";
import chatgpt from "../../assets/images/chatgpt-logo.png";
import figma from "../../assets/images/figma.png";
import procreate from "../../assets/images/procreate.png";
import photoshop from "../../assets/images/photoshop.png";
import vue from "../../assets/images/vue.png";
import react from "../../assets/images/react.png";
import tailwind from "../../assets/images/tailwind.png";
import netlify from "../../assets/images/netlify.png";
import moodboard from "../../assets/images/Moodboard.png";
import moodboardmobile from "../../assets/images/moodboard-mobile.png";
import uimobile from "../../assets/images/ui-elements-mobile.png";
import uielements from "../../assets/images/UI Elements.png";
import long1 from "../../assets/images/Laptop Wireframe.png";
import long2 from "../../assets/images/Iphone Wireframe.png";
import arrow from "../../assets/images/arrow.svg";
import footerimage from "../../assets/images/macbook-footer.png";
import footerdiskimagemobile from "../../assets/images/footerdiskimagemobile.png";
import disk from "../../assets/images/rotating-circle.png";
import gradientfooterblue from "../../assets/images/gradient-footer-blue.png";
import gradientfooterpink from "../../assets/images/gradient-footer-pink.png";

const Project1 = () => {
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
      <section className="pb-10 2xl:pb-0 items-center justify-center pt-12 px-4 text-060709 bg-[#F8F8F8] xl:min-h-fit md:px-14 lg:px-32">
        <div className="grid grid-cols-1 h-fit md:grid-cols-6">
          <div className="flex flex-col col-span-4 gap-4">
            <h1 className="2xl:mt-10 text-3xl font-bold xl:leading-[5rem] xl:text-[52px] lg:leading-[4rem] lg:text-4xl font-hiragino">
              From Idea to Interface:<br/> My&nbsp; 
              <span className="text-[#F95FE7] inline-block xl:leading-[5rem] xl:text-[52px] lg:leading-[4rem] lg:text-4xl">
                Portfolio&nbsp;
              </span>
              <span className="inline-block text-3xl xl:leading-[5rem] xl:text-[52px] lg:leading-[4rem] lg:text-4xl">Project</span>
            </h1>
            <h2 className="text-xl font-semibold xl:text-2xl font-inter">Translating who I am into pixels and pages.</h2>
            <p className="text-md lg:text-xl font-inter 2xl:mb-10 xl:mr-28">This project was my chance to treat myself like a client, and I'm happy with the results. I set out to design a portfolio that boldly presents my work and reflects who I am: colorful, organized, and a little playful. This was a collaborative project with a front-end developer <a className=" italic text-[#004CE4]" href="https://shobhit.dev/" target="_blank">(shobhit.dev),</a> who brought my designs to life with his clean, responsive code that helped the site adapt from large desktop screens to mobile devices seamlessly. From curating the palette and layouts to adding my quirky touches, this project turned my personality into a fully functional digital space.</p>
          </div>
          <div className="col-span-2">
            <img className="w-[686px] pt-10 md:py-0" src={header} alt=""/>
          </div>
        </div> 
      </section>
      <div className="2xl:mt-[-9rem] flex flex-col md:flex-row gap-2 md:gap-0 items-center space-x-[0] md:space-x-[3rem] lg:space-x-[5rem] p-4 md:px-14 lg:px-32 font-inter
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
      <section id="overview" className="items-center justify-center lg:pt-12 px-4 text-060709 bg-[#F0F0F0] xl:min-h-fit md:px-14 lg:px-32 pb-6 xl:pb-16">
        <div className="grid grid-cols-1 h-fit md:grid-cols-6">
          <div className="md:col-span-5">
            <p className="py-10 text-xl font-semibold xl:text-2xl font-inter">I designed and built this personal portfolio website to reflect my colorful personality, showcase my UI/UX capabilities, and make it easy for recruiters and collaborators to get in touch.</p>
          </div>
          <div className="flex flex-col col-span-3 gap-6 lg:flex-row ">
            <div className="col-span-3">
              <img src={section2} alt=""/>
            </div>
          </div>
          <div className="pt-12 pb-4 md:pt-0">
            <div className="col-span-3 md:pl-8 md:ml-10 md:border-l-2 border-[#F95FE7] border-opacity-20 border-solid ">
              <span>Tools used:</span>
              <h3 className="pt-4 italic font-bold">Design</h3>
              <div className="flex gap-8 pt-4">
                <img className="object-contain" src={figma} alt=""/>
                <img className="object-contain" src={chatgpt} alt=""/>
                <img  className="object-contain" src={procreate} alt=""/>
                <img  className="object-contain"src={photoshop} alt=""/>
            </div>
            <h3 className="pt-10 italic font-bold">Development</h3>
              <div className="flex gap-8 pt-4">
                <img className="object-contain" src={vue} alt=""/>
                <img  className="object-contain" src={netlify} alt=""/>
                <img  className="object-contain" src={tailwind} alt=""/>
                <img  className="object-contain" src={react} alt=""/>
              </div>
              </div>
            <div className="col-span-3 md:pl-8 mt-10 md:ml-10 md:border-l-2 border-[#F95FE7] border-opacity-20 border-solid ">
            <span>Duration: <span className="font-bold">04 weeks</span></span>
          </div>
          </div>
          
        </div>
      </section>
      <section id="problem" className="items-center justify-center pt-12 px-4 text-060709 bg-[#F8F8F8] xl:min-h-fit md:px-14 lg:px-32 pb-10">
        <div className="grid grid-cols-1 h-fit md:grid-cols-6">
          <div className="md:col-span-3">
            <div>
          <h3 className="text-xl font-semibold xl:text-2xl font-inter">Problem Statement:</h3>
            <p className="mt-4 text-md lg:text-xl font-inter">Many modern portfolios overwhelm viewers with endless scrolling, flashy animations, and hidden clicks that confuse rather than guide. I set out to create a portfolio that’s clear, intuitive, engaging, and mindful without any complexities.</p>
            </div>
            <div className="mt-8">
          <h3 className="text-xl font-semibold xl:text-2xl font-inter">Goals:</h3>
              <ul className="pl-8 mt-4 list-disc text-md lg:text-xl font-inter">
                <li>
Showcase work & case studies clearly</li>
<li>Keep navigation simple</li>
<li>Add quirky, personal touches (stickers, animations, etc.)</li></ul>
            </div>
            </div>
          <div className="pt-10 text-white md:pt-0 md:pl-10 md:col-span-3">
            <h3 className="pb-4 text-xl font-bold text-black xl:text-2xl font-inter">Thus, Plan of Action (POA):</h3>
            <div className="flex flex-col w-full gap-4 md:flex-row text-md mt-3 lg:text-[18px] font-inter">
               <span className="flex items-center justify-center col-span-1 px-6 py-2 bg-[#F1A2FF] rounded-full">Avoid Clutter</span>
               <span className="flex items-center justify-center col-span-2 px-6 py-2 bg-[#F1A2FF] rounded-full">Adaptable to various screen sizes</span>
               {/* <span className="col-span-1 p-2 bg-pink-300 rounded-lg">Avoid Clutter</span> */}
            </div>
            <div className="flex flex-col w-full gap-4 pt-4 md:flex-row text-md lg:text-[18px] font-inter">
               <span className="flex items-center justify-center col-span-1 px-6 py-2 bg-[#F1A2FF] rounded-full">Quirky elements to grab attention</span>
               <span className="flex items-center justify-center col-span-2 px-6 py-2 bg-[#F1A2FF] rounded-full">Clean to read</span>
               {/* <span className="col-span-1 p-2 bg-pink-300 rounded-lg">Avoid Clutter</span> */}
            </div>
            <div className="flex flex-col w-full gap-4 pt-4 md:flex-row text-md lg:text-[18px] font-inter">
               <span className="flex items-center justify-center col-span-1 px-6 py-2 bg-[#F1A2FF] rounded-full">Easy to navigate</span>
               <span className="flex items-center justify-center col-span-2 px-6 py-2 bg-[#F1A2FF] rounded-full">Quick to load</span>
               <span className="flex items-center justify-center col-span-2 px-6 py-2 bg-[#F1A2FF] rounded-full">Organised</span>
               {/* <span className="col-span-1 p-2 bg-pink-300 rounded-lg">Avoid Clutter</span> */}
            </div>
            <div className="flex flex-col w-full gap-4 pt-4 md:flex-row text-md lg:text-[18px] font-inter">
               <span className="flex items-center justify-center col-span-1 px-6 py-2 bg-[#F1A2FF] rounded-full">Fewer clicks</span>
               {/* <span className="col-span-1 p-2 bg-pink-300 rounded-lg">Avoid Clutter</span> */}
            </div>
          </div>
        </div>
      </section>
      <section id="approach" className="items-center justify-center pt-12 px-4 text-[#060709] bg-[#F0F0F0] xl:min-h-fit md:px-14 lg:px-32">
        <div className="col-span-2 pb-16">
          <h3 className="text-xl font-semibold xl:text-2xl font-inter">Moodboard</h3>
          <p className="py-2 text-md lg:text-xl font-inter">A curated visual direction that sets the tone for my portfolio, all the way from my color choices to the overall vibe.</p>
          <img className="hidden md:flex" src={moodboard} alt=""/>
          <img className="md:hidden" src={moodboardmobile} alt=""/>
        </div>
        <div className="col-span-2 pb-10">
          <h3 className="text-xl font-semibold xl:text-2xl font-inter">UI elements</h3>
          <p className="pt-2 pb-4 text-md lg:text-xl font-inter">Here are the building blocks of the interface, which include all the buttons, stickers, cards, and micro-interactions, that helped me bring the design language to life.</p>
          <img className="hidden md:flex" src={uielements} alt=""/>
          <img className="md:hidden" src={uimobile} alt=""/>
        </div>
        <div className="grid grid-cols-7">
          <h3 className="col-span-6 text-xl font-semibold xl:text-2xl font-inter">Wireframe</h3>
          <p className="col-span-6 pt-2 mb-10 text-md lg:text-xl font-inter">A structural outline of the portfolio that defines the layout, hierarchy, and navigation flow before developing the website. These wireframes mark the foundation of the final design.</p>
       <div className="col-span-5 pb-10">
            <img src={long1} alt="" />
          </div>
          <div className="col-span-1 pt-8 pb-10">
            <img src={long2} alt="" />
          </div>
          </div>
      </section>
      <section id="outcome" className="relative overflow-hidden grid grid-cols-8 bg-[#F0F0F0]">
        <img className="absolute top-0 right-0 z-0 w-[50%] hidden md:block" src={gradientfooterblue} alt="footer laptop image"/>
          <img className="absolute bottom-0 left-0 w-[80%] z-0 hidden md:block" src={gradientfooterpink} alt="footer laptop image"/>
        <div className="col-span-12 md:col-span-4 pt-12 pl-4 text-[#060709] xl:min-h-fit md:pl-14 lg:pl-32">
          <h2 className="mb-4 lg:mb-10 text-[#060709] text-opacity-[13%] text-5xl lg:text-6xl font-semibold font-hiragino">Outcome?</h2>
          <span className="text-lg font-semibold lg:text-xl">I’d love for you to see for yourself!</span>
          <a className="mt-6 font-convergence flex max-w-fit py-2 px-4 gap-2 md:text-xl rounded-full bg-[#F95FE7] hover:bg-[#b544a7] md:mb-8" href="/">
           <span className="text-white">Live Site</span>
            <img className="w-6 md:w-8" src={arrow} alt="arrow vector for button" /></a>
        </div>
        <div className="relative col-span-12 md:col-span-4">
          <a href="/Pragati-CreativeDesigner-Resume.pdf" target="_blank" rel="noopener noreferrer" title="View Pragati's Resume">
              <motion.img
              className="absolute cursor-pointer  w-24 lg:w-[130px] xl:w-[150px] xl:top-[180px] xl:left-[-30px] top-[30px] left-[20px] "
                 src={disk}
                alt="pragati vishkwakarma resume"
                animate={{ rotate: 360 }}
                transition={{repeat: Infinity, duration: 20, ease: "linear"}}
            /></a>
          <img className="hidden md:flex" src={footerimage} alt="footer laptop image"/>
          <img className="md:hidden" src={footerdiskimagemobile} alt="footer laptop image mobile" />
        </div>
      </section>
      </div>
  );
};

export default Project1;
