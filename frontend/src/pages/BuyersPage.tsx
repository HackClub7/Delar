import card from "../assets/land3.svg";
import landImage from "../assets/land2.svg";
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
  const [lands, setLands] = useState<Land[]>([]);
  const navigate = useNavigate();

  const fetchOwnerlands = useCallback(async () => {
    if (!readOnlyDelarContract) return;

    try {
      const ownerLands: Land[] = await readOnlyDelarContract.veiwOwnerLands();
      const ownerLandsResult = [...ownerLands];

      setLands(ownerLandsResult);
    
    } catch (error) {
      console.error("Error fetching owner lands:", error);
      toast.error("Failed to fetch land, please try again later");
    }
  }, [readOnlyDelarContract]);

  useEffect(() => {
    fetchOwnerlands();
  }, [fetchOwnerlands]);

  const handleSeeDetails = (land: Land) => {
    navigate("/land-details", { state: land  });
    console.log("selected land", land);
    
  };

  return (
    <section className="container mx-auto overflow-x-hidden">
      <div className="min-h-screen mt-10 md:mt-0 flex flex-col items-center justify-center">
        <div className="w-full flex flex-row justify-between">
          <div className=" w-[65%] ml-8">
            <div className="w-full h-[50%]">
              <p className="text-black mb-4 text-lg md:text-xl">
                Recently Listed
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:w-full md:grid-cols-3 gap-2 h-full">
                {Array(3)
                  .fill(0)
                  .map((land, index) => (
                    <div
                      key={index}
                      className="bg-white border transition-all duration-300 transform group-hover:scale-[0.85] hover:scale-105 border-black rounded-3xl w-full sm:w-auto h-full sm:h-auto flex flex-col overflow-hidden"
                    >
                      <div className="text-white text-center w-full h-[60%] mt-1">
                        <img
                          src={card}
                          alt="card"
                          className="object-cover h-full w-full"
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
                      <div className="flex items-center  w-full text-black justify-end mb-3">
                        <button onClick={()=>handleSeeDetails(land)} className="border border-black  rounded-2xl p-3 text-xs md:text-sm hover:bg-[#C3A46B] hover:text-black transition duration-300">
                          See Details
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col">
              <p className="text-white p-4 text-lg md:text-xl">
                Available Leased Lands
              </p>

              <div className="bg-white rounded-2xl w-full md:w-full h-auto mx-auto py-4">
                <table className="w-full mx-8 text-black">
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
                          className="text-white text-sm text-center py-4"
                        >
                          No available leased lands
                        </td>
                      </tr>
                    ) : (
                      lands.map((land, index) => (
                        <tr
                          key={index}
                          className="text-center border-t border-green-300"
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

          <div className="text-center mr-4">
            <div className="relative w-full max-w-xs md:max-w-sm h-[665px] mx-auto">
              <img
                className="w-full h-full object-cover rounded-3xl"
                src={landImage}
                alt="land"
              />
              <div className="absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-black/60 to-transparent rounded-3xl">
                <div className="w-full">
                  {lands[0] && (
                    <LandDetails
                      numberOfPlots={lands[0].numberOfPlots}
                      landLocation={lands[0].landLocation}
                      titleNumber={lands[0].titleNumber}
                      plotForSale={lands[0].plotsforSale}
                      netWorth={Number(lands[0].netWorth)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyersPage;
