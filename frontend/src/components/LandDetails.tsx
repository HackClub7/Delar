// import icon from "../assets/icon.png";
// import ether from "../assets/Eth.svg";
// const LandDetails = () => {
  
//   return (
//     <div className="p-2 rounded-lg flex flex-col justify-between h-full">
//       <div className="flex items-center gap-2 text-white">
//         <img className="w-6 h-6 rounded-full" src={icon} alt="icon" />
//         <p className="text-xs md:text-sm truncate w-32">0XmghZR3UgYMCr...pC</p>
//       </div>
//       <p className="text-white text-xs md:text-sm">Land id: Pl 234009</p>
//       <div className="flex items-center  w-full text-white justify-between">
//         <span className="flex items-center text-xs md:text-sm">
//           <img src={ether} alt="" className="w-4 h-4 md:w-5 md:h-5" />
//           <span className="ml-1">1.09 eth</span>
//         </span>
//         <button className="border border-white rounded-2xl py-1 px-3 text-xs md:text-sm md:py-1 hover:bg-white hover:text-black transition duration-300">
//           See Details
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LandDetails;

import icon from "../assets/icon.png";
import ether from "../assets/Eth.svg";

// Define the props for LandDetails to accept the dynamic data
interface LandDetailsProps {
  numberOfPlots: number;
  landLocation: string;
  titleNumber: string;
  price: number;
}

const LandDetails: React.FC<LandDetailsProps> = ({ numberOfPlots, landLocation, titleNumber, price }) => {
  return (
    <div className="rounded-lg flex flex-col">
      <div className="flex text-white">
        <img className="w-6 h-6 rounded-full" src={icon} alt="icon" />
        <p className="text-xs md:text-sm truncate w-32">{landLocation}</p>
      </div>
      <p className="text-white text-xs md:text-sm">Land ID: {titleNumber}</p>
      <p className="text-white text-xs md:text-sm">Number of Plots: {numberOfPlots}</p>
      <div className="flex items-center w-full text-white justify-between">
        <span className="flex items-center text-xs md:text-sm">
          <img src={ether} alt="ether icon" className="w-4 h-4 md:w-5 md:h-5" />
          <span className="ml-1">{price} ETH</span>
        </span>
        <button className="border border-white rounded-2xl p-1 text-xs md:text-xs md:p-1 hover:bg-white hover:text-black transition duration-300">
          See Details
        </button>
      </div>
    </div>
  );
};

export default LandDetails;
