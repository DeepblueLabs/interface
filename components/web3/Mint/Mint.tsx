import { ethers } from "ethers";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { useWaitForTransaction } from "wagmi";
import { contractAbi, contractAddress } from "@/config/contract";

import { TwitterIcon } from "@/components/icons/TwitterIcon";

interface IMintProps {
    amount: number;
    value: string | "0.00";
}

export const MintButton = ({amount, value}: IMintProps) => {
    const {
      config,
      error: prepareError,
      isError: isPrepareError,
    } = usePrepareContractWrite({
      address: contractAddress,
      abi: contractAbi,
      functionName: "mintShark",
      args: [amount],
      chainId: 5,
      overrides: {
        value: ethers.utils.parseEther(value?.toString() || "0.00"),
      },
    });
  
    const { data, error, isError, write } = useContractWrite(config);
  
    const { isLoading, isSuccess } = useWaitForTransaction({
      hash: data?.hash,
    });
  
    return (
      <>
        <div className="flex items-center text-off-white">
          <TwitterIcon />
          <p>{!write ? "No funciona" : isLoading}</p>
        </div>
        <button
          disabled={!write || isLoading}
          onClick={() => write?.()}
          className="bg-transparent text-off-white border border-off-white py-2 px-4 rounded-lg"
        >
          {isLoading ? "Minting..." : "Mint"}
        </button>
        {isSuccess && (
          <div className="text-off-white">
            <p className="text-sm">Transaction successful!</p>
            <div>
              <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}>
                Etherscan
              </a>
            </div>
          </div>
        )}
        {isPrepareError && isError && (
          <div className="text-off-white">
            <p className="text-sm">Error: {(prepareError || error)?.message}</p>
          </div>
        )}
      </>
    );
  };