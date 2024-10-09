import { useState } from "react"; 
import { Link } from "react-router-dom";

import Button from "./Button";

// import logo from "../assets/Logo.png";

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
    <div className="flex items-center justify-between p-8 mx-4 md:mx-16">
      
      <Link to="/" onClick={handleLinkClick}>
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

      <div className={`flex md:flex items-center gap-2 ${isOpen ? "flex-col absolute top-12 right-0  w-full  md:static md:flex-row" : "hidden md:flex"}`}>
        <Button />

    
      <div
        className={`${
          isOpen
            ? "flex  absolute top-16 right-0 left-11  w-full py-3 z-10"
            : "hidden"
        } md:hidden`}  
      >
        <Link
          to="/buyerspage"
          className="text-white block px-4 py-2"
          onClick={handleLinkClick}
        >
          Buy 
        </Link>
        <Link
          to="/register"
          className="text-white block px-4 py-2"
          onClick={handleLinkClick}
        >
          Register
        </Link>
        <Link
          to="/mylands"
          className="text-white block px-4 py-2"
          onClick={handleLinkClick}
        >
          Lands
        </Link>
        <w3m-button />
      </div>

    
      <div className="hidden md:flex md:flex-row md:gap-4 items-center">
        <w3m-button />

      </div>
      
      <ToastContainer />
    </div>
  );
};

export default Navbar;
