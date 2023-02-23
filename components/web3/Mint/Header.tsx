import React from "react";
import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { useContractReads } from "wagmi";
import { contractAbi, contractAddress } from "@/config/contract";
import classNames from "classnames";
import { Share_Tech_Mono } from "@next/font/google";
const font = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

interface IMintElementProps {
  children: React.ReactNode;
  className?: string;
}

export const MintOptionHeader = () => {
  const contractReads = useContractReads({
		contracts: [
			{
				address: contractAddress,
				abi: contractAbi,
				functionName: "maxSupply",
        chainId: 5
			},
			{
				address: contractAddress,
				abi: contractAbi,
				functionName: "totalSupply",
        chainId: 5
			}
		]
  });

	const { data, error, isError, isLoading } = contractReads;
  const [maxSupply, setMaxSupply] = useState<string | undefined>(undefined);
	const [totalSupply, setTotalSupply] = useState<string | undefined>(undefined);

	useEffect(() => {
    if (!isLoading && !isError && data) {
      setMaxSupply(data[0]?.toString());
			setTotalSupply(data[1]?.toString());
    }
  }, [data, error, isError, isLoading]);

  return (
    <div className="px-6 py-4 border-b border-transparent-white">
      <div className="text-lg text-off-white">
        <h2 className={classNames(font.className, "text-2xl")}>
          Genesis
        </h2>
      </div>
      <p className={classNames(font.className, "text-md text-off-white")}>
        SharkPunks minted: {totalSupply}/{maxSupply}
      </p>
    </div>
  );
};
