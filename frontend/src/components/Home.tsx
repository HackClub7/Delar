import landOverview from "../assets/landOverview.png";
import landcover from "../assets/landcover.png";
import landlocation from "../assets/landlocation.png";
import land from "../assets/land.png";
import landblock from "../assets/landbloc.png";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen text-[#FFFFFF]">
      <div className="text-[#FFFFFF] max-w-[100vw] h-[819px] mt-[132px] gap-[20px] flex overflow-hidden mx-auto">
        <div className="max-w-[1059.8px] h-[730.28px] p-[48px]">
          <div className="w-[399px] h-[260px] p-[32px]">
            <h2 className="w-[359px] h-[200px] text-5xl tracking-negative-5 font-normal leading-[45.5px]">
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

            <button className="w-[183px] h-[47px] mt-[40px] rounded-[12px] border-[1px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              Sell Land
            </button>
          </div>
        </div>
        <div className="w-[812px] h-[819px] rounded-[20px] mt-[20px]">
          <img
            src={landcover}
            alt="Land 3"
            className="rounded-[20px] w-[270px] h-[393px] border-[3px] ml-[350px] mt-[180px] absolute z-50"
          />
          <div className="flex w-[822px] h-[352px] gap-[20px]">
            <img
              src={landOverview}
              alt="Land 1"
              className="rounded-[20px] w-[470px] h-[602px] border-[3px] custom-gradient-border p-4 bg-white"
            />
            <img
              src={landblock}
              alt="Land 2"
              className="rounded-[20px] w-[326px] h-[436px] mt-[2px] border-[3px] p-4 bg-white shadow-custom"
            />
          </div>
          <div className="flex w-[822px] h-[0px] gap-[20px] mb-[5]">
            <img
              src={landlocation}
              alt="Land 4"
              className="rounded-[20px] w-[479px] h-[428px] border-[3px] custom-gradient-border p-4 bg-white shadow-custom"
            />
            <img
              src={land}
              alt="Land 5"
              className="w-[320px] h-[436px] rounded-[20px] border-[4px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
