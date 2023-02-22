"use static";
import React from "react";
import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { contractAbi, contractAddress } from "@/config/contract";
import classNames from "classnames";
import { Share_Tech_Mono } from "@next/font/google";
const font = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

interface IMintElementProps {
  className?: string;
}

export const MintTitle = ({ className }: IMintElementProps) => {
  const contractRead = useContractRead({
    address: contractAddress,
    abi: contractAbi,
    functionName: "name",
  });

  const { data, error, isError, isLoading } = contractRead;
  const [name, setName] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setName(data.toString());
    }
  }, [data, error, isError, isLoading]);

  return (
    <>
      <div>
        <h1
          className={classNames(
            className,
            "text-4xl sm:text-5xl text-left text-off-white",
            font.className
          )}
        >
					{name}
				</h1>
      </div>
    </>
  );
};
