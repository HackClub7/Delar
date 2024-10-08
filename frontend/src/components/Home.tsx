import landOverview from "../assets/landOverview.png";
import landcover from "../assets/landcover.png";
import landlocation from "../assets/landlocation.png";
import land from "../assets/land.png";
import landblock from "../assets/landbloc.png";
import button from "../assets/bottuns.png";

const Home = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100vh] m-0 text-[#FFFFFF]">
      <div className="text-[#FFFFFF] w-[100%] h-[100vh] gap-[260px] items-center justify-center flex overflow-hidden m-0">
        <div className="ml-[60px]">
          <div className="w-[399px] ml-[50px] h-[260px]">
            <h2 className="w-[359px] h-[200px] text-5xl tracking-negative-8 font-normal leading-[45.5px]">
              Revolutionizing Land Ownership with Blockchain
            </h2>
            <p className="w-[299px] h-[78px]">
              Secure transparent, and borderless land transactions, powered by smart contracts
            </p>
          </div>
          <div className="w-[407.8px] h-[422.28px] flex flex-col items-center justify-center">
            <button className="w-[183px] h-[47px] mt-[56.92px] rounded-[12px] border-[1px] bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              Buy Land
            </button>
            <img src={button} alt="" />
            <button className="w-[183px] h-[47px] rounded-[12px] border-[1px] bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              Sell Land
            </button>
          </div>
        </div>
        <div className="w-[100%] h-[819px] rounded-[20px]">
          <img
            src={landcover}
            alt="Land 3"
            className="rounded-[20px] w-[370px] h-[393px] border-[3px] ml-[300px] mt-[180px] absolute z-50"
          />
          <div className="flex w-[822px] h-[352px] gap-[20px]">
            <img
              src={landOverview}
              alt="Land 1"
              className="rounded-[20px] w-[470px] h-[332px] border-[3px] p-4 bg-white"
            />
            <img
              src={landblock}
              alt="Land 2"
              className="rounded-[20px] w-[376px] h-[336px] mt-[2px] border-[3px] p-4 bg-white"
            />
          </div>
          <div className="flex w-[822px] h-[0px] gap-[20px] mb-[5]">
            <img
              src={landlocation}
              alt="Land 4"
              className="rounded-[20px] w-[479px] h-[396px] border-[3px] custom-gradient-border shadow-custom"
            />
            <img
              src={land}
              alt="Land 5"
              className="w-[376px] h-[396px] rounded-[20px] border-[4px] custom-gradient-border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
