import landOverview from "../assets/landOverview.png";
import landcover from "../assets/landcover.png";
import landlocation from "../assets/landlocation.png";
import land from "../assets/land.png";
import landblock from "../assets/landbloc.png";
import button from "../assets/bottuns.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center  mt-8 items-center w-full h-full m-0 text-[#FFFFFF]">
      <div className="text-[#FFFFFF] w-full h-full items-center justify-center flex overflow-hidden m-0">
        <div className="md:ml-[10px]">
          <div className="md:w-[409px] w-[150px] ml-[80px] md:h-[220px] h-[370px] md:flex md:flex-col md:justify-center md:items-start">
            <h2 className="md:w-[359px] w-[200px] md:h-[150px] h-[100px] md:text-5xl text-2xl md:tracking-negative-8 tracking-negative-5 font-normal md:leading-[45.5px] leading-[25.5px]">
              Revolutionizing Land Ownership with Blockchain
            </h2>
            <p className="md:w-[309px] w-[200px] md:h-[78px] h-[150px] md:text-lg text-l">
              Secure transparent, and borderless land transactions, powered by smart contracts
            </p>
          </div>
          <div className="md:w-[357.8px] w-[250px] md:h-[352.28px] h-[100px] flex flex-col items-center justify-center mr-[20px] md:mb-[0px] mb-[110px]">
            <Link to={"/buyersPage"}>
              <button className="md:w-[183px] md:h-[47px] md:mt-[56.92px] rounded-[12px] border-[1px] bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                Buy Land
              </button>
            </Link>
            <img src={button} alt=""/>
            <Link to={"/register"}>
              <button className="md:w-[183px] md:h-[47px] rounded-[12px] border-[1px] bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                Sell Land
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-full rounded-[20px] flex flex-col relative">
          <img
            src={landcover}
            alt="Land 3"
            className="rounded-[20px] lg:max-w-none lg:w-[270px] w-[250px] h-[0px] lg:h-[293px] ml-[230px] mt-[150px] absolute z-50"
          />
          <div className="flex lg:w-[352px] w-[450px] lg:h-[302px] h-[300px] lg:gap-[20px] gap-[10px]">
            <img
              src={landOverview}
              alt="Land 1"
              className="rounded-[20px] lg:w-[370px] w-[200px] h-[250px] lg:w-[470px] lg:h-[282px] border-[3px] lg:p-4 lg:bg-white"
            />
            <img
              src={landblock}
              alt="Land 2"
              className="rounded-[20px] lg:w-[326px] w-[200px] h-[250px] lg:h-[282px] border-[3px] lg:p-4 lg:bg-white"
            />
          </div>
          <div className="flex lg:w-[402px] w-[450px] lg:h-[302px] h-[300px] lg:gap-[20px] gap-[10px]">
            <img
              src={landlocation}
              alt="Land 4"
              className="rounded-[20px] lg:w-[370px] w-[200px] h-[250px] lg:w-[470px] lg:h-[282px] border-[3px]"
            />
            <img
              src={land}
              alt="Land 5"
              className="rounded-[20px] lg:w-[336px] w-[200px] h-[250px] lg:h-[282px] border-[3px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
