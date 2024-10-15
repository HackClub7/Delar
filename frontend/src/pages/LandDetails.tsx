import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../components/Modal";
import landImage from "../assets/landlocation.png"; 

const LandDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const { state } = useLocation(); 
  console.log(state);
  
  const land = state?.land || {}; 

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);
  // animation effect
  
  const handleModalToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative flex flex-col w-[90%] h-screen mt-5  transform transition-transform duration-500 ease-in-out mb-8 md:mb-0">
      {/* Buy Button */}
      <div className="w-full flex justify-end">
        <button
          onClick={handleModalToggle}
          className="p-2 md:mr-[158px] mt-2 rounded-md bg-gradient-to-r from-[#ece2dd] via-[#ce9f89] to-[#aca4a0] text-black font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Buy Land
        </button>
      </div>
      <section className="w-full flex flex-col items-center md:flex-row mt-10">
     
        <div className="mt-8 md:w-[30%] h-full flex flex-col items-center">
          <img
            src={landImage}
            alt="Land Location"
            className="w-full object-cover h-[100%] rounded-[20px]"
          />
          <h2 className="text-black font-bold text-lg mt-2">
          Location: {land.landLocation?.toString() || ""}
          </h2>
        </div>

        {/* Table of Land Details */}
        <div className="w-screen flex justify-start md:ml-6 md:w-[60%] h-full mt-6 md:mt-0">
          {isOpen && <Modal setIsOpen={setIsOpen} />}
          <table className="w-full bg-white table-auto">
            <thead>
              <tr>
                <th className="p-2 text-left">No. of Plots</th>
                <th className="p-2 text-left">Verified</th>
                <th className="p-2 text-left">Title Number</th>
                <th className="p-2 text-left">Net Worth</th>
                <th className="p-2 text-left">Plots for Sale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">{land.numberOfPlots?.toString() || ""}</td>
                <td className="p-2">{land.isVerified ? "Yes" : "No"}</td>
                <td className="p-2">{land.titleNumber?.toString() || ""}</td>
                <td className="p-2">{land.netWorth?.toString() || ""}</td>
                <td className="p-2">{land.plotsforSale?.toString() || ""}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default LandDetails;
