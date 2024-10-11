import landOverview from "../assets/landOverview.png";
import landcover from "../assets/group.png";

import button from "../assets/bottuns.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row md:justify-center items-center mt-5 md:mt-0 w-full max-h-screen text-[#5C4033] p-4 lg:p-8">
      <div className="lg:w-1/2 w-full lg:pr-8">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-snug lg:leading-[45.5px] mb-4 text-[#5C4033]">
            Revolutionizing Land Ownership with Blockchain
          </h2>
          <p className="text-sm md:text-lg lg:text-xl mb-8">
            Secure, transparent, and borderless land transactions, powered by smart contracts
          </p>
        </div>

        {/* land images on mobile screen */}
        <div className="relative lg:grid-cols-2 grid md:hidden  grid-cols-1 md:grid-cols-2 gap-4">
         
         <img
           src={landOverview}
           alt="Land Overview"
           className="rounded-lg w-full h-auto border-2 p-2 bg-white"
         />
        
         
       </div>


        {/* buy land frontend\src\assets\group.png  */}

        <div className="flex flex-row items-center align-middle lg:items-center gap-4 mt-5 md:mt-8 w-full ">
          <Link to={"/buyersPage"}>
            <button className="w-full lg:w-auto md:px-8 md:text-base text-sm md:py-3 bg-white px-6 py-1  rounded-lg bg-gradient-to-r from-[#ece2dd] via-[#ce9f89] to-[#aca4a0] text-black font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              Buy Land
            </button>
          </Link>
          <img src={button} alt="" className="block w-20 sm:w-28 md:w-28 h-auto" />
          <Link to={"/register"}>
          <button className="w-full lg:w-auto md:px-8 md:text-base text-sm md:py-3 bg-white px-6 py-1  rounded-lg bg-gradient-to-r from-[#ece2dd] via-[#ce9f89] to-[#aca4a0] text-black font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              Sell Land
            </button>
          </Link>
        </div>
      </div>

         {/* land images */}
      <div className="lg:w-2/4 w-full">
        {/* land display for deskstop view */}
        <div className="hidden w-full h-96  md:flex justify-center align-middle items-center">
          
          
          <img
            src={landcover}
            alt="Land Block"
            className="rounded-lg object-contain h-full p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
