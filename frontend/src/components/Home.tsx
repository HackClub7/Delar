/* eslint-disable @typescript-eslint/no-unused-vars */
import landOverview from "../assets/land2.jpg";
import landcover from "../assets/group.png";

import button from "../assets/btn.png";
import { Link, useNavigate} from "react-router-dom";
import useRunners from "../hooks/useRunners";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


const Home = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const {signer, provider} = useRunners();
  const navigate = useNavigate();


  useEffect(()=>{
    if(signer){
      setIsWalletConnected(true);
      toast.success("Wallet Connnected Successfully!")
    } else{
      setIsWalletConnected(false);
    }

  },[signer])

  const handleBuyLand =()=>{
    if(isWalletConnected){
      navigate("/buyersPage");
    }else{
      toast.error("Please Connect to Your Wallet first!");
    }
  }
  
  return (
    <div className="flex md:justify-center md:w-[1250px] text-[#5C4033] h-auto md:mt-[2px] lg:gap-[8px] p-4">
      <div className="w-[497.8px] h-[5.28px] gap-[8px] ">
        <div className="max-w-full md:max-w-md lg:max-w-lg h-auto gap-6 md:gap-8 mt-8">
          <h2 className=" w-[323px]  text-lg sm:text-xl md:text-3xl lg:text-4xl font-normal leading-snug sm:leading-tight md:leading-snug lg:leading-tight tracking-tight text-left">
            Revolutionizing Land Ownership with Blockchain
          </h2>
          <p className="w-[323px] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-snug sm:leading-relaxed md:leading-relaxed tracking-tight text-left">
            Secure, transparent, and borderless land transactions, powered by smart contracts
          </p>
        </div>



        {/* land images on mobile screen */}
        <div className="relative lg:grid-cols-2 grid md:hidden  grid-cols-1 md:grid-cols-2 gap-4">
         
         <img
           src={landOverview}
           alt="Land Overview"
           className="rounded-lg w-full mt-8 h-auto border-20 bg-white"
         />
       </div>

        <div className="flex flex-row md:block hidden md:justify-normal align-middle md:mt-8 lg:w-[407.8px] h-[422.28px] gap-[20px] ">
          <button onClick={handleBuyLand} className="w-[183px] h-[47px] top-[56.92px] left-[110.7px] md:px-8 md:text-base text-sm md:py-3 border-[1px] p-[10px 30px] rounded-[12px] bg-[#5C4033] text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
            View All Lands
          </button>
          <img src={button} alt="" className="block ml-[30px] w-310px sm:w-28 md:w-28 h-[80px]" />
          <Link to={"/register"}>
            <button className="w-[183px] h-[47px] top-[301.92px] left-[110.7px] md:px-8 md:text-base text-sm md:py-3 border-[1px] p-[10px 30px] rounded-[12px] bg-[#5C4033] text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              Register Land
            </button>
          </Link>
        </div>
      </div>

         {/* land images */}
      <div className="lg:block md:hidden hidden">
        {/* land display for deskstop view */}
        <div className=" rounded-[20px]">
          <img
            src={landcover}
            alt="Land Block"
            className="lg:w-[510px] md:w-[400px] lg:h-[480px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
