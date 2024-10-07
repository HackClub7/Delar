import { Link } from "react-router-dom";
import Button from "./Button";
// import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center mx-16 justify-between p-8">
      <Link to="/">
        <span className="flex items-center gap-2 text-2xl font-bold justify-center text-white">
          {" "}
          <img src={'logo'} alt="logo" />{" "}
          Delar
        </span>
      </Link>
      <Button />
    </div>
  );
};

export default Navbar;
