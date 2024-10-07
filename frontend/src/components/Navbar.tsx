import { useState } from "react"; 
import { Link } from "react-router-dom";
import Button from "./Button";

// import logo from "../assets/Logo.png";
import logo from "/src/assets/logos.svg";
import Button2 from "./Button2";
import { HiMenu, HiX } from "react-icons/hi"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className="flex items-center justify-between p-8 mx-4 md:mx-16">
   
      <Link to="/">

        <span className="flex items-center gap-2 text-2xl font-bold justify-center text-white">
          {" "}
          <img src={'logo'} alt="logo" />{" "}

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
        <Button2 />
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
