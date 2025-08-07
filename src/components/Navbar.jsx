import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 p-4 md:p-5 md:px-32 bg-[#151618] shadow-2xs">
      <div className="flex items-center space-x-[2rem] md:space-x-[5rem]">
        <Link
          to="/"
          className="text-[#F6F5F3] text-md md:text-lg transition-colors hover:text-[#d1d0cd]"
        >
          Home
        </Link>
        <Link
          to="#work"
          className="text-[#F6F5F3] text-md md:text-lg transition-colors hover:text-[#d1d0cd]"
        >
          Work
        </Link>
        <Link
          to="/talk"
          className="text-[#F6F5F3] text-md md:text-lg transition-colors hover:text-[#d1d0cd]"
        >
          Let's Talk
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
