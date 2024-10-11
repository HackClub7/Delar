import card from "../assets/land3.svg";

import landImage from "../assets/land2.svg";

import LandDetails from "../components/LandDetails";

import useContract from "../hooks/useContract";
import { useCallback, useEffect, useState } from "react";

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
      const ownerLands: Land[] = await readOnlyDelarContract.veiwOwnerLands(
        "0xE859ac304020Dd3039082827d2Cbd25979297BDD"
      );

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
        <div className="w-full flex flex-row justify-between ">

          <div className=" w-[65%] ml-8">
            {/* recently listed */}
            <div className="w-full h-[50%]">
              <p className="text-black mb-4 text-lg md:text-xl">
                Recently Listed
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:w-full md:grid-cols-3 gap-2 h-full">
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="bg-white border border-black rounded-3xl w-full sm:w-auto h-full sm:h-auto flex flex-col overflow-hidden"
                    >
                      <div className="text-white text-center w-full h-[60%] mt-1">
                        <img src={card} alt="card" className="object-cover h-full w-full" />
                      </div>
                      <LandDetails
                        numberOfPlots={lands[index]?.numberOfPlots || 0}
                        landLocation={
                          lands[index]?.landLocation || "Unknown Location"
                        }
                        titleNumber={
                          lands[index]?.titleNumber || "Unknown Title"
                        }
                        price={lands[index]?.price || 0}
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/*  available listed*/}
            <div className="mt-14 flex flex-col">
              <p className="text-text p-4 text-lg md:text-xl ">
                Available Leased Lands
              </p>
              <div className="bg-white rounded-2xl w-full md:w-full h-auto mx-auto py-4">
                <div className="flex items-center justify-between mx-8 pt-4 text-black">
                  <p>Plots</p>
                  <p>Title Number</p>
                  <p>Location</p>
                  <p className="text-green-300">Monitor</p>
                </div>
                <hr className="border-t-2 border-green-300 mx-auto mt-3" />

                <div className="px-4">
                  {lands.length === 0 ? (
                    <p className="text-black text-sm mt-4">
                      No available leased lands
                    </p>
                  ) : (
                    lands.map((land, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between mt-4 text-black"
                      >
                        <p>{land.numberOfPlots}</p>
                        <p>{land.titleNumber}</p>
                        <p>{land.landLocation}</p>
                        <button className="text-green-300 hover:underline hover:bg-white hover:text-black rounded-3xl px-6 py-2 border border-green-300">
                          Monitor
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Hottest Land Section */}
          <div className="text-center mr-4">
            <p className="text-black mb-4 text-lg md:text-xl">Hottest Land</p>
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
