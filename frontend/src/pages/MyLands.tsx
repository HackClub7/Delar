/* eslint-disable @typescript-eslint/no-unused-vars */
import LandDetails from "../components/LandDetails";
import card from "../assets/land 4.svg";
import useContract from "../hooks/useContract";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LeaseModal from "../components/LeaseModal";

interface Land {
  numberOfPlots: number;
  landLocation: string;
  titleNumber: string;
  netWorth: number;
  plotsforSale: string;
  isVerified: boolean;
  forSale: boolean;
}

const MyLands = () => {
  const readOnlyDelarContract = useContract(true);
  const [lands, setLands] = useState<Land[]>([]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLand, setSelectedLand] = useState<Land | null>(null);

  const fetchOwnerlands = useCallback(async () => {
    if (!readOnlyDelarContract) return;

    try {
      const ownerLands: Land[] = await readOnlyDelarContract.veiwOwnerLands();
      setLands([...ownerLands]);
    } catch (error) {
      console.error("Error fetching owner lands:", error);
      toast.error("Failed to fetch land, please try again later");
    }
  }, [readOnlyDelarContract]);

  useEffect(() => {
    fetchOwnerlands();
  }, [fetchOwnerlands]);

  const handleSeeDetails = (land: Land) => {
    navigate("/land-details", { state: land });
  };

  const handleOpenModal = (land: Land) => {
    setSelectedLand(land);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedLand(null);
  };

  const handleConfirm = (saleIndex: number, plotsToBuy: number) => {
    console.log(`Leasing land with index ${saleIndex} and ${plotsToBuy} plots.`);
  
    handleCloseModal(); 
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-black m-4 font-semibold text-2xl">My Lands</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:w-full md:grid-cols-3 gap-4 mx-auto">
        {lands.length === 0 ? (
          <p className="text-white text-center">No lands available</p>
        ) : (
          lands.map((land, index) => (
            <div
              key={index}
              className="bg-white border border-black rounded-3xl w-full sm:w-auto h-auto sm:h-auto flex flex-col overflow-hidden transition-all duration-300 transform group-hover:scale-[0.85] hover:scale-105"
            >
              <div className="text-white text-center w-full h-[60%] ml-1 mt-2">
                <img
                  src={card}
                  alt="card"
                  className="h-full object-cover w-full"
                />
              </div>
              <LandDetails
                numberOfPlots={land.numberOfPlots}
                landLocation={land.landLocation}
                titleNumber={land.titleNumber}
                plotForSale={land.plotsforSale}
                netWorth={land.netWorth}
              />
              <div className="flex items-center w-full text-black justify-end mb-3">
                <button
                  onClick={() => handleOpenModal(land)}
                  className="border border-black rounded-2xl p-3 text-xs md:text-sm hover:bg-[#C3A46B] hover:text-black transition duration-300"
                >
                  Lease Land
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {isOpen && selectedLand && (
        <LeaseModal
          setIsOpen={handleCloseModal}
          onConfirm={(saleIndex, plotsToBuy) =>
            handleConfirm(saleIndex, plotsToBuy)
          }
          saleIndex={0} 
          landOwner={selectedLand.titleNumber}
          landLocation={selectedLand.landLocation}
          plotsToBuy={0} 
        />
      )}
    </div>
  );
};

export default MyLands;
