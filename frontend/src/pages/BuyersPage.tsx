/* eslint-disable @typescript-eslint/no-explicit-any */
import card from "../assets/land1.jpg";
import LandDetails from "../components/LandDetails";
import useContract from "../hooks/useContract";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
interface Land {
  numberOfPlots: number;
  landLocation: string;
  titleNumber: string;
  netWorth: number;
  plotsforSale: string;
  isVerified: boolean;
  forSale: boolean;
}

const BuyersPage = () => {
  const readOnlyDelarContract = useContract(true);
  const [visible, setVisible] = useState<boolean>(false);
  const [lands, setLands] = useState<Land[]>([]);
  const navigate = useNavigate();

  const fetchOwnerlands = useCallback(async () => {
    if (!readOnlyDelarContract) return;

    try {
      const ownerLands: Land[] = await readOnlyDelarContract.veiwOwnerLands();
      const ownerLandsResult = [...ownerLands];

      setLands(ownerLandsResult);
      console.log(ownerLandsResult);
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

  const handleSeeDetails = (land: any) => {
   
    const landArray = Array.from(land) as [
      number,       
      string,       
      string,       
      number,        
      string,       
      boolean,       
      boolean        
    ];

  
  
    const commodityObj = {
      numberOfPlots: landArray[0].toString(),
      landLocation: landArray[1],
      titleNumber: landArray[2],
      netWorth: landArray[3].toString(),
      plotsforSale: landArray[4],
      isVerified: landArray[5],
      forSale: landArray[6],
    };
  
    console.log(commodityObj);
  
  
    navigate("/land-details", { state: commodityObj });
  };
  

  return (
    <section className="container mx-2 md:mx-auto overflow-x-hidden">
      <div className="min-h-screen gap-4 mt-10 md:mt-0 flex flex-col items-center justify-center ml-4 md:ml-0">
        <div className="w-full flex flex-col justify-center md:px-10">
            <div className="w-full h-[50%]">
              <p className="text-black mb-4 text-lg md:text-xl">
                Recently Listed
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:w-full md:grid-cols-3 gap-2 h-full ">
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className={`bg-white border transform transition-transform duration-700 ease-in-out group-hover:scale-[0.85] hover:shadow-2xl hover:md:mx-2 hover:scale-105  border-black rounded-2xl w-[93%] md:w-full sm:w-auto h-full  flex flex-col  overflow-hidden
                        ${visible ? 'translate-y-0  rotate-0 scale-100 opacity-100' : 'translate-y-10  -rotate-45 scale-75 opacity-0'}`}
                    >
                      <div className=" w-[100%] h-[85%] ">
                        <img
                          src={card}
                          alt="card"
                          className="object-cover h-[100%] w-[100%]"
                        />
                      </div>
                      {lands[index] && (
                        <LandDetails
                          numberOfPlots={Number(lands[index].numberOfPlots)}
                          landLocation={lands[index].landLocation.toString()}
                          titleNumber={lands[index].titleNumber.toString()}
                          plotForSale={lands[index].plotsforSale.toString()}
                          netWorth={Number(lands[index].netWorth)}
                        />
                      )}
                      <div className="flex items-center  w-full text-black justify-end mb-3 p-2">
                        <button onClick={()=>handleSeeDetails(lands[index])} className="border text-white border-black bg-[#5C4033]  rounded-xl md:m-4 md:py-1 md:px-2  p-2 text-xs md:text-sm hover:bg-[#C3A46B] hover:text-black transition duration-300">
                          See Details
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* other lands */}
            <div className="mt-14 w-full flex flex-col">
              <h4 className="text-black text-center underline font-semibold p-4 text-lg md:text-xl">
                Available Leased Lands
              </h4>

              <div className="  w-full md:w-full h-auto md:mx-auto md:py-4 ">
                <table className="w-full md:mx-8 text-black">
                  <thead>
                    <tr>
                      <th className="p-2  text-left">Plots</th>
                      <th className="p-2 text-left">Title Number</th>
                      <th className="p-2 text-left">Location</th>
                      <th className="p-2 text-left">forSale</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lands.length === 0 ? (
                      <tr>
                        <td
                          colSpan={4}
                          className="text-black text-sm text-center py-4"
                        >
                          No available leased lands
                        </td>
                      </tr>
                    ) : (
                      lands.map((land, index) => (
                        <tr
                          key={index}
                          className="text-center border border-green-300"
                        >
                          <td className="p-2">
                            {land.numberOfPlots.toString()}
                          </td>
                          <td className="p-2">{land.titleNumber.toString()}</td>
                          <td className="p-2">
                            {land.landLocation.toString()}
                          </td>
                          <td className="p-2">{land.netWorth.toString()}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BuyersPage;