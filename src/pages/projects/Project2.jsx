import header from "../../assets/images/Portfolio Header Mockup.png";
import section2 from "../../assets/images/Laptop-iphone mockup-section-1.png";
import chatgpt from "../../assets/images/chatgpt-logo.png";
import moodboard from "../../assets/images/Moodboard.png";
import uielements from "../../assets/images/UI Elements.png";
import long1 from "../../assets/images/Laptop Wireframe.png";
import long2 from "../../assets/images/Iphone Wireframe.png";
import arrow from "../../assets/images/arrow.svg";
import footerimage from "../../assets/images/macbook-footer.png";

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
          Work
        </a>
        <a
          href="#talk"
          className="text-[#040404] text-md md:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Let's Talk
        </a>
      </div>
      </nav>
      <section className="items-center justify-center pt-12 px-4 text-060709 bg-[#F8F8F8] xl:min-h-fit md:px-14 lg:px-24">
        <div className="grid grid-cols-1 h-fit md:grid-cols-6">
          <div className="flex flex-col col-span-3 gap-6">
            <h1 className="mt-20 text-4xl font-bold lg:leading-[5rem] lg:text-6xl font-hiragino">
              From Idea to Interface:<br/> My&nbsp; 
              <span className="text-[#F95FE7] inline-block text-4xl lg:text-6xl">
                Portfolio&nbsp;
              </span>
              <span className="inline-block text-4xl lg:text-6xl">Project</span>
            </h1>
            <h2 className="text-2xl font-semibold font-inter">Translating who I am into pixels and pages.</h2>
            <p className="text-xl font-inter xl:mr-28">This project was my chance to treat myself like a client, and I'm happy with the results. I set out to design a portfolio that boldly presents my work and reflects who I am: colorful, organized, and a little playful. This was a collaborative project with a front-end developer <a className=" italic text-[#004CE4]" href="https://shobhit.dev/" target="_blank">(shobhit.dev),</a> who brought my designs to life with his clean, responsive code that helped the site adapt from large desktop screens to mobile devices seamlessly. From curating the palette and layouts to adding my quirky touches, this project turned my personality into a fully functional digital space.</p>
          </div>
          <div className="col-span-3">
            <img className="w-[686px]" src={header} alt=""/>
          </div>
        </div> 
      </section>
      <div className="mt-[-9rem] flex items-center space-x-[2rem] md:space-x-[5rem] p-4 md:p-6 font-inter
     md:px-32 bg-[linear-gradient(to_right,rgba(231,64,235,0.15)_0%,rgba(59,25,156,0.15)_100%)] shadow-2xs">
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
      <section className="items-center justify-center pt-12 px-4 text-060709 bg-[#F0F0F0] xl:min-h-fit md:px-14 lg:px-24">
        <div className="grid grid-cols-1 h-fit md:grid-cols-6">
          <div className="md:col-span-5">
            <p className="py-10 text-2xl font-bold">I designed and built this personal portfolio website to reflect my colorful personality, showcase my UI/UX capabilities, and make it easy for recruiters and collaborators to get in touch.</p>
          </div>
          <div className="flex flex-col col-span-3 gap-6 lg:flex-row ">
            <div className="col-span-3">
              <img src={section2} alt=""/>
            </div>
          </div>
          <div className="col-span-3 pl-8 ml-4 border-l-2 border-pink-300 border-solid">
              <span>Tools used:</span>
              <h3 className="font-bold">Design</h3>
              <div className="flex gap-8">
                <img src={chatgpt} alt=""/>
                <img src={chatgpt} alt=""/>
                <img src={chatgpt} alt=""/>
                <img src={chatgpt} alt=""/>
            </div>
            <h3 className="pt-10 font-bold">Development</h3>
              <div className="flex gap-4">
                <img src={chatgpt} alt=""/>
                <img src={chatgpt} alt=""/>
                <img src={chatgpt} alt=""/>
                <img src={chatgpt} alt=""/>
            </div>
            <div>
            <span>Duration: <span className="font-bold">XX weeks</span></span>
          </div>
          </div>
          
        </div>
      </section>
      <section className="items-center justify-center pt-12 px-4 text-060709 bg-[#F8F8F8] xl:min-h-fit md:px-14 lg:px-24 pb-10">
        <div className="grid grid-cols-1 h-fit md:grid-cols-6">
          <div className="md:col-span-3">
            <div>
          <h3>Problem Statement:</h3>
            <p>Many modern portfolios overwhelm viewers with endless scrolling, flashy animations, and hidden clicks that confuse rather than guide. I set out to create a portfolio that’s clear, intuitive, engaging, and mindful without any complexities.</p>
            </div>
            <div className="mt-8">
          <h3>Goals:</h3>
              <ol>
                <li>
Showcase work & case studies clearly</li>
<li>Keep navigation simple</li>
<li>Add quirky, personal touches (stickers, animations, etc.)</li></ol>
            </div>
            </div>
          <div className="pl-10 text-white md:col-span-3">
            <div className="flex gap-4">
               <span className="col-span-1 px-6 py-2 bg-[#F1A2FF] rounded-full">Avoid Clutter</span>
               <span className="col-span-2 px-6 py-2 bg-[#F1A2FF] rounded-full">Adaptable to various screen sizes</span>
               {/* <span className="col-span-1 p-2 bg-pink-300 rounded-lg">Avoid Clutter</span> */}
            </div>
            <div className="flex gap-4 pt-4">
               <span className="col-span-1 px-6 py-2 bg-[#F1A2FF] rounded-full">Quirky elements to grab attention</span>
               <span className="col-span-2 px-6 py-2 bg-[#F1A2FF] rounded-full">Clean to read</span>
               {/* <span className="col-span-1 p-2 bg-pink-300 rounded-lg">Avoid Clutter</span> */}
            </div>
            <div className="flex gap-4 pt-4">
               <span className="col-span-1 px-6 py-2 bg-[#F1A2FF] rounded-full">Easy to navigate</span>
               <span className="col-span-2 px-6 py-2 bg-[#F1A2FF] rounded-full">Quick to load</span>
               <span className="col-span-2 px-6 py-2 bg-[#F1A2FF] rounded-full">Organised</span>
               {/* <span className="col-span-1 p-2 bg-pink-300 rounded-lg">Avoid Clutter</span> */}
            </div>
            <div className="flex gap-4 pt-4">
               <span className="col-span-1 px-6 py-2 bg-[#F1A2FF] rounded-full">Fewer clicks</span>
               {/* <span className="col-span-1 p-2 bg-pink-300 rounded-lg">Avoid Clutter</span> */}
            </div>
          </div>
        </div>
      </section>
      <section className="items-center justify-center pt-12 px-4 text-[#060709] bg-[#F0F0F0] xl:min-h-fit md:px-14 lg:px-24">
        <div className="col-span-2 pb-10">
          <h3>Moodboard</h3>
          <p>A curated visual direction that sets the tone for my portfolio, all the way from my color choices to the overall vibe.</p>
          <img src={moodboard} alt=""/>
        </div>
        <div className="col-span-2 pb-10">
          <h3>UI elements</h3>
          <p>Here are the building blocks of the interface, which include all the buttons, stickers, cards, and micro-interactions, that helped me bring the design language to life.</p>
          <img src={uielements} alt=""/>
        </div>
        <div className="grid grid-cols-7">
          <h3 className="col-span-6 font-bold">Wireframe</h3>
          <p className="col-span-6 mb-10">A structural outline of the portfolio that defines the layout, hierarchy, and navigation flow before developing the website. These wireframes mark the foundation of the final design.</p>
       <div className="col-span-5 pb-10">
            <img src={long1} alt="" />
          </div>
          <div className="col-span-1 pt-8 pb-10">
            <img src={long2} alt="" />
          </div>
          </div>
      </section>
      <section className="grid grid-cols-8  bg-[#F0F0F0]" >
        <div  className="col-span-4 pt-12 pl-4 text-[#060709] xl:min-h-fit md:pl-14 lg:pl-24">
          <h2>Outcome?</h2>
          <span>I’d love for you to see for yourself!</span>
          <a className="font-convergence flex max-w-fit py-2 px-4 gap-2 md:text-xl rounded-full bg-[#F95FE7] hover:bg-[#b544a7] md:mb-8" href="/">
           <span>Live Site</span>
            <img className="w-6 md:w-8" src={arrow} alt="arrow vector for button" /></a>
        </div>
        <div className="col-span-4">
          <img src={footerimage} alt="footer laptop image"/>
        </div>
      </section>
      </div>
  );
};

export default Project2;
