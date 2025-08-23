import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 p-4 md:p-6 font-inter
     md:px-32 bg-[#151618] shadow-2xs">
      <div className="flex items-center space-x-[2rem] md:space-x-[5rem]">
        <a
          href="/"
          className="text-[#F6F5F3] text-md md:text-lg transition-colors hover:text-[#d1d0cd]"
        >
          Home
        </a>
        <a
          href="#work"
          className="text-[#F6F5F3] text-md md:text-lg transition-colors hover:text-[#d1d0cd]"
        >
          Work
        </a>
        <a
          href="#talk"
          className="text-[#F6F5F3] text-md md:text-lg transition-colors hover:text-[#d1d0cd]"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
