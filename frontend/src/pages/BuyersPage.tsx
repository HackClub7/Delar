import card from "../assets/cards.png";
import landImage from "../assets/landOverview.png";
import LandDetails from "../components/LandDetails";
import useContract from '../hooks/useContract';
import { useCallback, useEffect, useState } from 'react';


interface Land {
  numberOfPlots: number;
  landLocation: string;
  titleNumber: string;
  price: number;
}

const BuyersPage = () => {
  const readOnlyDelarContract = useContract(true);
 
  const [lands, setLands] = useState<Land[]>([]);

  const fetchOwnerlands = useCallback(async () => {
    if (!readOnlyDelarContract) return;

    try {
      const ownerLands: Land[] = await readOnlyDelarContract.veiwOwnerLands("0xE859ac304020Dd3039082827d2Cbd25979297BDD");
    
      setLands(ownerLands);
    } catch (error) {
      console.log("Error fetching owner lands:", error);
    }
  }, [readOnlyDelarContract]);

  useEffect(() => {
    fetchOwnerlands();
  }, [fetchOwnerlands]);

  return (
    <section className="container mx-auto overflow-x-hidden">
      <div className="min-h-screen mt-10 md:mt-0 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      
          <div className="text-center">
            <p className="text-white mb-4 text-lg md:text-xl">Recently Listed</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:w-full md:grid-cols-3 gap-4 mx-4">
              {Array(3).fill(0).map((_, index) => (
                <div
                  key={index}
                  className="bg-green-200 border border-green-200 rounded-3xl w-full sm:w-auto h-[320px] sm:h-auto flex flex-col"
                >
                  <div className="text-white text-center">
                    <img src={card} alt="card" className="mx-auto mb-2" />
                  </div>
                  <LandDetails
                    numberOfPlots={lands[index]?.numberOfPlots || 0}
                    landLocation={lands[index]?.landLocation || "Unknown Location"}
                    titleNumber={lands[index]?.titleNumber || "Unknown Title"}
                    price={lands[index]?.price || 0}
                  />
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-white p-4 text-lg md:text-xl">Available Leased Lands</p>
              <div className="bg-green-200 rounded-2xl w-full md:w-[550px] h-auto mx-auto py-4">
                <div className="flex items-center justify-between mx-8 pt-4 text-white">
                  <p>Plots</p>
                  <p>Title Number</p>
                  <p>Location</p>
                  <p className="text-green-300">Monitor</p>
                </div>
                <hr className="border-t-2 border-green-300 mx-auto mt-3" />
               
                <div className="px-4">
                  {lands.length === 0 ? (
                    <p className="text-white text-sm mt-4">No available leased lands</p>
                  ) : (
                    lands.map((land, index) => (
                      <div key={index} className="flex items-center justify-between mt-4 text-white">
                        <p>{land.numberOfPlots}</p>
                        <p>{land.titleNumber}</p>
                        <p>{land.landLocation}</p>
                        <button className="text-green-300 hover:underline hover:bg-white hover:text-black rounded-3xl px-6 py-2 border border-green-300">Monitor</button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Hottest Land Section */}
          <div className="text-center">
            <p className="text-white mb-4 text-lg md:text-xl">Hottest Land</p>
            <div className="relative w-full max-w-xs md:max-w-sm h-[665px] mx-auto">
              <img
                className="w-full h-full object-cover rounded-3xl"
                src={landImage}
                alt="land"
              />
              <div className="absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-black/60 to-transparent rounded-3xl">
                <div className="w-full">
                  <LandDetails
                    numberOfPlots={lands[0]?.numberOfPlots || 0}
                    landLocation={lands[0]?.landLocation || "Unknown Location"}
                    titleNumber={lands[0]?.titleNumber || "Unknown Title"}
                    price={lands[0]?.price || 0}
                  />
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
