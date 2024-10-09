import { useCallback } from "react";
import { toast } from "react-toastify";
import useContract from "./useContract";
import { useAppKitAccount } from "@reown/appkit/react";
import { useAppKitNetwork } from "@reown/appkit/react";
import { baseSepolia } from "@reown/appkit/networks";




const useRegisterLand = () => {
    const contract = useContract(true);
    const { address } = useAppKitAccount();
    const { chainId } = useAppKitNetwork();
    return useCallback(
        async (numberOfPlots: string, landLocation: string, titleNumber: number) => {
            if (
                !numberOfPlots ||
                !landLocation ||
                !titleNumber
            ) {
                toast.error("Missing field(s)");
                return;
            }
            if (!address) {
                toast.error("Connect your wallet!");
                console.log("chainID", chainId);
                console.log("Base sepolia", baseSepolia.chainId);
                
                
                return;
            }
            if (chainId !== baseSepolia.chainId) {
                toast.error("You are not connected to the right network");
                return;
            }

            if (!contract) {
                toast.error("Cannot get contract!");
                return;
            }

            try {
                const estimatedGas = await contract.registerLand.estimateGas(
                    numberOfPlots,
                    landLocation,
                    titleNumber
                );
                const tx = await contract.registerLand(
                    numberOfPlots,
                    landLocation,
                    titleNumber,
                    {
                        gasLimit: (estimatedGas * BigInt(120)) / BigInt(100),
                    }
                );
                const reciept = await tx.wait();

                if (reciept.status === 1) {
                    toast.success("Land Registered successful");
                    return;
                }
                toast.error("Land registration failed");
                return;
            } catch (error) {
                console.error("error while registering land: ", error);
                toast.error("Land registration errored");
            }
        },
        [address, chainId, contract]
    );
};

export default useRegisterLand;
