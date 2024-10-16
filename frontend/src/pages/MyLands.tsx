/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useCallback, useEffect, useState } from 'react';
// import LandDetails from "../components/LandDetails";
// import card from "../assets/land1.jpg";
// import useContract from '../hooks/useContract';
// import { toast } from "react-toastify";
// import Modal from "../components/Modal"; 

// interface Land {
//   numberOfPlots: number;
//   landLocation: string;
//   titleNumber: string;
//   netWorth: number;
//   plotsforSale: string;
//   isVerified: boolean;
//   forSale: boolean;
// }

// const MyLands = () => {
//   const readOnlyDelarContract = useContract(true); 
//   const [lands, setLands] = useState<Land[]>([]);
//   const [visible, setVisible] = useState<boolean>(false);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [selectedLand, setSelectedLand] = useState<Land | null>(null);

//   const fetchOwnerlands = useCallback(async () => {
//     if (!readOnlyDelarContract) return;

//     try {
//       const ownerLands: Land[] = await readOnlyDelarContract.veiwOwnerLands();
//       setLands([...ownerLands]);
//     } catch (error) {
//       console.error("Error fetching owner lands:", error);
//       toast.error("Failed to fetch land, please try again later");
//     }
//   }, [readOnlyDelarContract]);

//   useEffect(() => {
//     fetchOwnerlands();
//   }, [fetchOwnerlands]);

//   useEffect(() => {
//     const timer = setTimeout(() => setVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const openLeaseModal = (land: Land) => {
//     setSelectedLand(land); // Set the selected land for the modal
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="container mx-auto px-4">
//       <h2 className="text-black m-4 font-semibold text-2xl">My Lands</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
//         {lands.length === 0 ? (
//           <p className="text-white text-center">No lands available</p>
//         ) : (
//           lands.map((land, index) => (
//             <div
//               key={index}
//               className={`bg-white border transform transition-transform duration-700 ease-in-out group-hover:scale-[0.85] hover:shadow-2xl hover:md:mx-2 hover:scale-105 border-black rounded-2xl w-[93%] md:w-full sm:w-auto h-full flex flex-col overflow-hidden ${
//                 visible
//                   ? 'translate-y-0 rotate-0 scale-100 opacity-100'
//                   : 'translate-y-10 -rotate-45 scale-75 opacity-0'
//               }`}
//             >
//               <div className="text-white text-center w-full h-[60%]">
//                 <img src={card} alt="card" className="h-full object-cover w-full" />
//               </div>

//               {/* Render LandDetails Component */}
//               <LandDetails
//                 numberOfPlots={land.numberOfPlots}
//                 landLocation={land.landLocation}
//                 titleNumber={land.titleNumber}
//                 plotForSale={land.plotsforSale}
//                 netWorth={land.netWorth}
//               />

//               {/* Lease Land Button */}
//               <button
//                 onClick={() => openLeaseModal(land)}
//                 className="mt-4 p-2 bg-gradient-to-r from-[#ece2dd] via-[#ce9f89] to-[#aca4a0] text-black font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out rounded-lg"
//               >
//                 Lease Land
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Lease Modal */}
//       {isModalOpen && selectedLand && (
//         <Modal 
//           isOpen={isModalOpen}
//           setIsOpen={setIsModalOpen}
//           land={selectedLand} // Pass selected land data to the modal
//         />
//       )}
//     </div>
//   );
// };

// export default MyLands;
import  { useCallback, useEffect, useState } from 'react';
import LandDetails from "../components/LandDetails";
import card from "../assets/land1.jpg";
import useContract from '../hooks/useContract';
import { toast } from "react-toastify";
import Modal from "../components/Modal"; // Import your modal component

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
  const readOnlyDelarContract = useContract(true); // Read-only contract instance
  const [lands, setLands] = useState<Land[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedLandIndex, setSelectedLandIndex] = useState<number | null>(null);

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

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const openLeaseModal = (index: number) => {
    setSelectedLandIndex(index); // Store the selected land index
    setIsModalOpen(true); // Open the modal
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-black m-4 font-semibold text-2xl">My Lands</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
        {lands.length === 0 ? (
          <p className="text-white text-center">No lands available</p>
        ) : (
          lands.map((land, index) => (
            <div
              key={index}
              className={`bg-white border transform transition-transform duration-700 ease-in-out group-hover:scale-[0.85] hover:shadow-2xl hover:md:mx-2 hover:scale-105 border-black rounded-2xl w-[93%] md:w-full sm:w-auto h-full flex flex-col overflow-hidden ${
                visible
                  ? 'translate-y-0 rotate-0 scale-100 opacity-100'
                  : 'translate-y-10 -rotate-45 scale-75 opacity-0'
              }`}
            >
              <div className="text-white text-center w-full h-[60%]">
                <img src={card} alt="card" className="h-full object-cover w-full" />
              </div>

              {/* Land Details */}
              <LandDetails
                numberOfPlots={land.numberOfPlots}
                landLocation={land.landLocation}
                titleNumber={land.titleNumber}
                plotForSale={land.plotsforSale}
                netWorth={land.netWorth}
              />

              {/* Lease Land Button */}
              <button
                onClick={() => openLeaseModal(index)}
                className="mt-4 p-2 bg-gradient-to-r from-[#ece2dd] via-[#ce9f89] to-[#aca4a0] text-black font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out rounded-lg"
              >
                Verify Land
              </button>
            </div>
          ))
        )}
      </div>

      {/* Modal for Leasing Land */}
      {isModalOpen && (
        <Modal setIsOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default MyLands;
