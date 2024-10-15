import LandDetails from "../components/LandDetails";
import card from "../assets/land 4.svg";
import useContract from '../hooks/useContract';
import { useCallback, useEffect, useState } from 'react';
import { toast } from "react-toastify";


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

  const fetchOwnerlands = useCallback(async () => {
    if (!readOnlyDelarContract) return;

    try {
      const ownerLands: Land[] = await readOnlyDelarContract.veiwOwnerLands(); 
      const ownerLandsResult = [ ...ownerLands ];
      // console.log("owner land reslu",ownerLandsResult);
      

      setLands(ownerLandsResult);
      // console.log("lands", lands);
      
  
    } catch (error) {
      console.error("Error fetching owner lands:", error);
      toast.error("Failed to fetch land, please try again later");
    }
  }, [readOnlyDelarContract]);

  useEffect(() => {
    fetchOwnerlands();
  }, [fetchOwnerlands]);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-black m-4 font-semibold text-2xl">My Lands</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:w-full md:grid-cols-3 gap-4 mx-auto">
        {lands.length === 0 ? (
          <p className="text-white text-center">No lands available</p>
        ) : (
          lands.map((_, index) => (
            <div
              key={index}
              className="bg-white border border-black rounded-3xl w-full sm:w-auto h-auto sm:h-auto flex flex-col overflow-hidden transition-all duration-300 transform group-hover:scale-[0.85] hover:scale-105"
            >
              <div className="text-white text-center w-full h-[60%] ml-1 mt-2">
                <img src={card} alt="card" className=" h-full object-cover w-full" /> 
              </div>
              <LandDetails
                numberOfPlots={Number(lands[index].numberOfPlots)} 
                landLocation={lands[index].landLocation.toString()}    
                titleNumber={lands[index].titleNumber.toString()}
                plotForSale={lands[index].plotsforSale.toString()}     
                netWorth={Number(lands[index].netWorth)}             
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyLands;