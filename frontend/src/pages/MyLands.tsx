
import LandDetails from "../components/LandDetails";
import card from "../assets/land1.jpg";
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
  const [visible, setVisible] = useState<boolean>(false);


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
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100); 
    return () => clearTimeout(timer);
  }, []);

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
              className={`bg-white border transform transition-transform duration-700 ease-in-out group-hover:scale-[0.85] hover:shadow-2xl hover:md:mx-2 hover:scale-105  border-black rounded-2xl w-[93%] md:w-full sm:w-auto h-full  flex flex-col  overflow-hidden
                ${visible ? 'translate-y-0  rotate-0 scale-100 opacity-100' : 'translate-y-10  -rotate-45 scale-75 opacity-0'}`}
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

