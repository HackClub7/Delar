
import icon from "../assets/location.svg";
import ether from "../assets/Eth.svg";
import { Link } from "react-router-dom";

// Define the props for LandDetails to accept the dynamic data
interface LandDetailsProps {
  numberOfPlots: number;
  landLocation: string;
  titleNumber: string;
  price: number;
}

const LandDetails: React.FC<LandDetailsProps> = ({ numberOfPlots, landLocation, titleNumber, price }) => {
  return (
    <div className="rounded-lg flex flex-col  h-full px-2  mt-2">
      <div className="flex items-center text-black ">
        <img className="w-6 h-6 rounded-full" src={icon} alt="icon" />
        <p className="text-xs md:text-sm truncate ml-3">{landLocation}</p>
      </div>


      <p className="text-black text-xs md:text-sm ">Available of Plots: {numberOfPlots}</p>
      <p className="text-black text-xs md:text-sm mt-1 font-bold">Land ID: {numberOfPlots}</p>
      <div className="flex items-center w-full text-black justify-between">
        <span className="flex items-center text-xs md:text-sm">
          <img src={ether} alt="ether icon" className="w-4 h-4 md:w-5 md:h-5" />
          <span className="ml-1">{price} ETH</span>
        </span>

        <Link to={"/land-details"}>
          <button className="border border-black rounded-2xl  p-3 text-xs md:text-sm  hover:bg-[#C3A46B] hover:text-black transition duration-300">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandDetails;
