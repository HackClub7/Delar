/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import useRunners from "../hooks/useRunners"; 
import { toast } from "react-toastify";
import useContract from "../hooks/useContract"; 

interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  saleIndex?: number;
  landOwner?: string;
  plotsToBuy?: number;
}

const Modal = ({ setIsOpen, saleIndex, landOwner, plotsToBuy }: ModalProps) => {
  const { signer, provider } = useRunners(); 
  const [loading, setLoading] = useState(false);
  const readOnlyDelarContract = useContract( true); 
  const handleModalClose = () => {
    setIsOpen((prev) => !prev);
  };

 
  const handleBuyLand = useCallback(async () => {
    if (!readOnlyDelarContract) {
      toast.error("Contract not initialized. Please refresh the page.");
      return;
    }
    try {
      setLoading(true); 

      const tx = await readOnlyDelarContract.buyLand(saleIndex, landOwner, plotsToBuy);
      if(saleIndex ||
        landOwner ||
        plotsToBuy 
      ){
        toast.error("not coming")
        console.log("tx",);
        
      }
      
      toast.info("Transaction sent. Waiting for confirmation...");
      await tx.wait();
      console.log("transaction");
      
      toast.success("Transaction successful!");
      setIsOpen(false); 
    } catch (error) {
      console.error("Transaction failed:", error);
      toast.error("Transaction failed. Please try again.");
    } finally {
      setLoading(false); 
    }
  }, [readOnlyDelarContract, saleIndex,landOwner,plotsToBuy,setIsOpen]);

  useEffect(() => {
    if (!signer) {
      toast.warn("Please connect your wallet to proceed.");
    }
  }, [signer]);

  return (
    <section className="fixed flex justify-center items-center left-0 right-0 top-0 bottom-0 bg-opacity-70 bg-gray-500 inset-0">
      <div className="h-[400px] w-[400px] flex justify-center items-center flex-col bg-[#e5dfdd] rounded-xl shadow-lg">
        <p className="font-serif text-2xl text-center">
          Are you sure you want to continue with this transaction?
        </p>
        <div className="mt-10 w-[50%] flex flex-row justify-between items-center">
          <button
            onClick={handleModalClose}
            className="border border-black bg-gradient-to-r from-[#ece2dd] via-[#ce9f89] to-[#aca4a0] text-black font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out p-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleBuyLand}
            className="border border-black bg-gradient-to-r from-[#ece2dd] via-[#ce9f89] to-[#aca4a0] text-black font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out p-2 rounded-lg ml-4"
            disabled={loading}
          >
            {loading ? "Processing..." : "Confirm"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;


