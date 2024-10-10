import { useState } from "react"; 
import { Link } from "react-router-dom";

import logo from "/src/assets/logos.svg";
import { HiMenu, HiX } from "react-icons/hi"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-between p-3 md:p-10  md:mx-16 ">
      <Link to="/" onClick={handleLinkClick} className="">
        <span className="flex items-center gap-2 text-2xl font-bold text-white">
          <img src={logo} alt="logo" />
          Delar
        </span>
      </Link>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <HiX className="text-white w-6 h-6" />
          ) : (
            <HiMenu className="text-white w-6 h-6" />
          )}
        </button>
      </div>

     
{/* nav bar icons */}
      <div
        className={`${
          isOpen
            ? "flex  flex-col absolute top-11 right-7 justify-center items-center w-[50%] py-3 z-10 bg-white rounded-tl-lg rounded-bl-lg rounded-br-lg"
            : "hidden"
        } md:hidden`}
      >
        <Link
          to="/buyerspage"
          className="text-black block px-4 py-1 bg-green-100 border-2 rounded-2xl mb-2"
          onClick={handleLinkClick}
        >
          Buy
        </Link>
        <Link
          to="/register"
         className="text-black block px-4 py-1 bg-green-100 border-2 rounded-2xl mb-2"
          onClick={handleLinkClick}
        >
          Register
        </Link>
        <Link
          to="/mylands"
          className="text-black block px-4 py-1 bg-green-100 border-2 rounded-2xl mb-2 hover:bg-green-500"
          onClick={handleLinkClick}
        >
         View Lands
        </Link>
        <w3m-button />
      </div>

      <div className="hidden md:flex md:flex-row md:gap-10 ml-[775px] items-center">
        <w3m-button />
      </div>

      <div className="absolute">
        <ToastContainer />
      </div>
    </div>
  );
};

export default Navbar;
