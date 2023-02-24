import React from "react";
import { ethers } from "ethers";
import {
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
} from "wagmi";
import {
    contractAbi,
    contractAddress,
} from "@/config/contract";
import { useDebounce } from "usehooks-ts";
import { TwitterIcon } from "@/components/icons/TwitterIcon";

interface IMintProps {
    amount: number;
    value: string | "0.00";
}

export const MintButton = ({ amount, value }: IMintProps) => {
  const debouncedAmount = useDebounce(amount, 500);
  const debouncedValue = useDebounce(value, 500);

  const { config, error: prepareError, isError: isPrepareError } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractAbi,
    functionName: "mintShark",
    args: [debouncedAmount],
    chainId: 5,
    overrides: {
      value: ethers.utils.parseEther(debouncedValue?.toString() || "0.00"),
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
          <p className="text-sm text-off-white">Transaction successful!</p>
          <div>
            <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}>
              Etherscan
            </a>
          </div>
        </div>
      )}
      {isPrepareError && isError && (
        <div className="text-off-white">
          <p className="text-sm">Error: {JSON.stringify((prepareError || error)?.message)})</p>
        </div>
      )}
    </>
  );
};