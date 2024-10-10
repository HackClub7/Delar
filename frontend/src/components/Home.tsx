import landOverview from "../assets/landOverview.png";
import landcover from "../assets/landcover.png";
import landlocation from "../assets/landlocation.png";
import land from "../assets/land.png";
import landblock from "../assets/landbloc.png";
import button from "../assets/bottuns.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full text-white p-4 lg:p-8">
      <div className="lg:w-1/2 w-full lg:pr-8">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-snug lg:leading-[45.5px] mb-4">
            Revolutionizing Land Ownership with Blockchain
          </h2>
          <p className="text-sm md:text-lg lg:text-xl mb-8">
            Secure, transparent, and borderless land transactions, powered by smart contracts
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-4">
          <Link to={"/buyersPage"}>
            <button className="w-full lg:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              Buy Land
            </button>
          </Link>
          <img src={button} alt="" className="hidden lg:block w-[183px] h-auto" />
          <Link to={"/register"}>
            <button className="w-full lg:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              Sell Land
            </button>
          </Link>
        </div>
      </div>

      <div className="lg:w-3/5 w-full mt-8 lg:mt-0">
        <div className="relative lg:grid-cols-2 grid  grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={landcover}
            alt="Land Cover"
            className="col-span-1 md:col-span-2 rounded-lg w-full lg:w-[270px] lg:h-[293px] lg:absolute lg:z-10 lg:top-[-50px] lg:left-[50%] lg:transform lg:translate-x-[-50%] md:relative"
          />
          <img
            src={landOverview}
            alt="Land Overview"
            className="rounded-lg w-full h-auto border-2 p-2 bg-white"
          />
          <img
            src={landblock}
            alt="Land Block"
            className="rounded-lg w-full h-auto border-2 p-2 bg-white"
          />
          <img
            src={landlocation}
            alt="Land Location"
            className="rounded-lg w-full h-auto border-2"
          />
          <img
            src={land}
            alt="Land"
            className="rounded-lg w-full h-auto border-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
