/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import landImage from "../assets/landlocation.png";
import { useLocation, useNavigate } from "react-router-dom";

interface Land {
  numberOfPlots: number;
  landLocation: string;
  titleNumber: string;
  netWorth: number;
  isVerified: string;
  plotsforSale: string;
}

const LandDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [land, setLand] = useState<Land | null>(null);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    if (state) {
      console.log("storedLand", state);
      setLand(state);
    } else {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  if (!land) return <p>Loading...</p>;

  const handleModalToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative flex flex-col w-full h-screen px-4 sm:px-6 lg:px-20 mt-5">
      {/* Buy Button */}
      <div className="w-full flex justify-end">
        <button
          onClick={handleModalToggle}
          className="p-2 md:mr-10 mt-2 rounded-md bg-gradient-to-r from-[#ece2dd] via-[#ce9f89] to-[#aca4a0] text-black font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Buy Land
        </button>
      </div>

      <section className="flex flex-col items-center md:flex-row md:items-start mt-10 gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <img
            src={landImage}
            alt="Land Location"
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
          <h2 className="text-black font-bold text-lg mt-4 text-center md:text-left">
            Location: {land.landLocation?.toString() || ""}
          </h2>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-2/3">
          {isOpen && <Modal setIsOpen={setIsOpen} />}
          <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left text-sm md:text-base">No. of Plots</th>
                <th className="p-4 text-left text-sm md:text-base">Verified</th>
                <th className="p-4 text-left text-sm md:text-base">Title Number</th>
                <th className="p-4 text-left text-sm md:text-base">Net Worth</th>
                <th className="p-4 text-left text-sm md:text-base">Plots for Sale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 text-sm md:text-base">{land.numberOfPlots?.toString() || ""}</td>
                <td className="p-4 text-sm md:text-base">{land.isVerified ? "Yes" : "No"}</td>
                <td className="p-4 text-sm md:text-base">{land.titleNumber?.toString() || ""}</td>
                <td className="p-4 text-sm md:text-base">{land.netWorth?.toString() || ""}</td>
                <td className="p-4 text-sm md:text-base">{land.plotsforSale?.toString() || ""}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default LandDetails;
