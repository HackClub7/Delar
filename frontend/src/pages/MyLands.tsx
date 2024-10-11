import LandDetails from "../components/LandDetails";
import card from "../assets/land 4.svg";
import useContract from '../hooks/useContract';
import { useCallback, useEffect, useState } from 'react';

interface Land {
  numberOfPlots: number;
  landLocation: string;
  titleNumber: string;
  price: number;
}

const MyLands = () => {
  // const readOnlyDelarContract = useContract(true);
  
  const [lands, setLands] = useState<Land[]>([
    {
      numberOfPlots: 2,
      landLocation: "jos south",
      titleNumber: "034",
      price: 0.3,
    },
    {
      numberOfPlots: 2,
      landLocation: "jos south",
      titleNumber: "034",
      price: 0.3,
    },
    {
      numberOfPlots: 2,
      landLocation: "jos south",
      titleNumber: "034",
      price: 0.3,
    },
    {
      numberOfPlots: 2,
      landLocation: "jos south",
      titleNumber: "034",
      price: 0.3,
    },
    {
      numberOfPlots: 2,
      landLocation: "jos south",
      titleNumber: "034",
      price: 0.3,
    },
  ]);

  // const fetchOwnerlands = useCallback(async () => {
  //   if (!readOnlyDelarContract) return;

  //   try {
  //     const ownerLands: Land[] = await readOnlyDelarContract.veiwOwnerLands("0xE859ac304020Dd3039082827d2Cbd25979297BDD");
  //     setLands(ownerLands);
  //   } catch (error) {
  //     console.log("Error fetching owner lands:", error);
  //   }
  // }, [readOnlyDelarContract]);

  // useEffect(() => {
  //   fetchOwnerlands();
  // }, [fetchOwnerlands]);

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
              className="bg-white border border-black rounded-3xl w-full sm:w-auto h-auto sm:h-auto flex flex-col overflow-hidden"
            >
              <div className="text-white text-center w-full h-[60%] ml-1 mt-2">
                <img src={card} alt="card" className=" h-full object-cover w-full" /> 
              </div>
              <LandDetails
                numberOfPlots={land.numberOfPlots}
                landLocation={land.landLocation}
                titleNumber={land.titleNumber}
                price={land.price}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyLands;