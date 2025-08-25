import header from "../../assets/images/Portfolio Header Mockup.png";

const Project1 = () => {
  return (
    <div className="bg-white">
      <nav className="sticky top-0 z-50 p-4 md:p-6 font-inter
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
      <section className="items-center justify-center px-4 text-060709 bg-[#F8F8F8] xl:min-h-fit md:px-14 lg:px-24">
        <div className="grid grid-cols-1 h-fit md:grid-cols-6">
          <div className="flex flex-col col-span-3 gap-6">
            <h1 className="mt-20 text-xl font-bold lg:text-5xl font-hiragino">
              From Idea to Interface:<br/> My&nbsp; 
              <span className="text-[#F95FE7] inline-block">
                Portfolio&nbsp;
              </span>
              <span className="inline-block ">Project</span>
            </h1>
            <h2 className="text-2xl font-semibold font-inter">Translating who I am into pixels and pages.</h2>
            <p className="text-lg font-inter xl:mr-28">This project was my chance to treat myself like a client, and I’m happy with the results. I set out to design a portfolio that boldly presents my work and reflects who I am: colorful, organized, and a little playful. This was a collaborative project with a front-end developer (shobhit.dev), who brought my designs to life with his clean, responsive code that helped the site adapt from large desktop screens to mobile devices seamlessly.From curating the palette and layouts to adding my quirky touches, this project turned my personality into a fully functional digital space.</p>
          </div>
          <div className="col-span-3">
            <img className="w-[686px]" src={header} alt=""/>
          </div>
        </div> 
        
      
      </section>
      <div className="flex items-center space-x-[2rem] md:space-x-[5rem] p-4 md:p-6 font-inter
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
      </div>
  );
};

export default Project1;
