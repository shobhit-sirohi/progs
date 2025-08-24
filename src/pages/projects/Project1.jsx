import footer from "../../assets/images/footer-image.png";
const Project1 = () => {
  return (
    <div>
      <nav className="sticky top-0 z-50 p-4 md:p-6 font-inter
     md:px-32 bg-[#F0F0F0] shadow-2xs">
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
      <section className="items-center justify-center px-4 text-060709 bg-[#F0F0F0] xl:min-h-fit  md:px-14 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-3 ">
            <h1 className="text-xl font-bold lg:text-5xl font-hiragino">
              From Idea to Interface: My&nbsp; 
              <span className="text-[#F95FE7] inline-block">
                Portfolio&nbsp;
              </span>
              <span className="inline-block ">Project</span>
            </h1>
          </div>
          <div>
            <img src={footer} alt=""/>
          </div>
        </div> 
      </section>
      </div>
  );
};

export default Project1;
