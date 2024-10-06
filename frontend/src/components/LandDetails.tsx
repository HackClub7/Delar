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
//       <div className="flex items-center mt-2 md:mt-4 w-full text-white justify-between">
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

const LandDetails = () => {
  return (
    <div className="p-2 rounded-lg flex flex-col justify-between h-full">
      <div className="flex items-center gap-2 text-white">
        <img className="w-6 h-6 rounded-full" src={icon} alt="icon" />
        <p className="text-xs md:text-sm truncate w-32">0XmghZR3UgYMCr...pC</p>
      </div>
      <p className="text-white text-xs md:text-sm">Land id: Pl 234009</p>
      <div className="flex items-center  w-full text-white justify-between">
        <span className="flex items-center text-xs md:text-sm">
          <img src={ether} alt="" className="w-4 h-4 md:w-5 md:h-5" />
          <span className="ml-1">1.09 eth</span>
        </span>
        <button className="border border-white rounded-2xl py-1 px-3 text-xs md:text-sm md:py-1 hover:bg-white hover:text-black transition duration-300">
          See Details
        </button>
      </div>
    </div>
  );
};

export default LandDetails;
