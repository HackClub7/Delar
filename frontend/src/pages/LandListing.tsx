

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { toast } from "react-toastify";
import useListedLand from "../hooks/useListedLand"; 
import useContract from "../hooks/useContract"; 

const LandListing: React.FC = () => {
  const [landIndex, setLandIndex] = useState<number>(0);
  const [landPortion, setLandPortion] = useState<number>(0);
  const [loading, setLoading] = useState(false);

 
  const handleListLand = useListedLand();
  const readOnlyDelarContract = useContract(true); 

  
  const handleListedLand = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    if (!readOnlyDelarContract) {
      toast.error("Contract not initialized. Please connect your wallet.");
      return;
    }

    try {
      setLoading(true); 

      const tx = await readOnlyDelarContract.listLand(landIndex, landPortion);
      toast.info("Transaction sent. Waiting for confirmation...");

      
      await tx.wait();
      toast.success("Land listed for sale successfully!");

   
      setLandIndex(0);
      setLandPortion(0);
    } catch (error: any) {
      console.error("Transaction failed:", error);
      toast.error(
        error.reason || "Transaction failed. Please check your input and try again."
      );
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={handleListedLand}
        className="p-5 bg-white shadow-md rounded-md max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">List Your Land for Sale</h2>

    
        <label className="block mb-2 font-semibold">Land Index:</label>
        <input
          type="number"
          value={landIndex}
          onChange={(e) => setLandIndex(Number(e.target.value))}
          className="border rounded-md w-full p-2 mb-4"
          placeholder="Enter the land index"
          required
        />
        <label className="block mb-2 font-semibold">Portion to Sell (Plots):</label>
        <input
          type="number"
          value={landPortion}
          onChange={(e) => setLandPortion(Number(e.target.value))}
          className="border rounded-md w-full p-2 mb-4"
          placeholder="Enter the number of plots to sell"
          required
        />

        <button
        onClick={()=>
            handleListLand}
          type="submit"
          className={`w-full p-3 rounded-md text-white bg-[#5C4033] ${
            loading
              ? "bg-[#5C4033]"
              : "hover:bg-[#cb977f] hover:text-black transition duration-300"
          }`}
          disabled={loading}
        >
          {loading ? "Processing..." : "List Land for Sale"}
        </button>
      </form>
    </div>
  );
};

export default LandListing;
