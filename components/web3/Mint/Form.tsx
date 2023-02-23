import React from "react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { getWagmiConfig } from "@/config/contract";
import { useContractRead } from "wagmi";
import { MintOptionBody } from "@/components/web3/Mint/Section";
import { MintButton } from "@/components/web3/Mint/Mint";
import classNames from "classnames";
import { contractAbi, contractAddress } from "@/config/contract";
import { motion } from "framer-motion";
import { Share_Tech_Mono } from "@next/font/google";
const font = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

export const Form = () => {
  const contractRead = useContractRead({
    address: contractAddress,
    abi: contractAbi,
    functionName: "price",
    chainId: 5,
  });

  const [amount, setAmount] = useState<number>(1);
  const [price, setPrice] = useState<string>("0.00");
  const [totalPrice, setTotalPrice] = useState<string>("0.00");

  const { data, error, isError, isLoading } = contractRead;

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const etherPrice = ethers.utils.formatEther(data.toString());
      setPrice(etherPrice);
    }
  }, [data, error, isError, isLoading]);

  useEffect(() => {
    const total = parseFloat(price) * amount;
    setTotalPrice(total.toFixed(2));
  }, [amount, price]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setAmount(value);
    }
  };

  const handleAmountIncrement = () => {
    if (amount >= 2) {
      {
        alert("You can only mint 2 NFTs at a time.");
      }
      return;
    }
    setAmount(amount + 1);
  };

  const handleAmountDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div>
      <MintOptionBody>
        <h3 className={classNames(font.className, "text-md text-off-white")}>
          Amount to Mint
        </h3>
        <div className="border-b border-teal">
          <span
            className={classNames(font.className, "text-xl text-off-white")}
          >
            {amount}
          </span>
          <button
            onClick={handleAmountIncrement}
            className={classNames(
              font.className,
              "text-3xl text-off-white m-2"
            )}
          >
            +
          </button>
          <button
            onClick={handleAmountDecrement}
            className={classNames(
              font.className,
              "text-3xl text-off-white m-0"
            )}
          >
            -
          </button>
        </div>
      </MintOptionBody>
      <MintOptionBody>
        <h3 className={classNames(font.className, "text-md text-off-white")}>
          Price per NFT
        </h3>
        <div>
          <span
            className={classNames(font.className, "text-xl text-off-white")}
          >
            {price} Ξ
          </span>
        </div>
      </MintOptionBody>
      <MintOptionBody>
        <h3 className={classNames(font.className, "text-md text-off-white")}>
          Total Price 🦈
        </h3>
        <div>
          <span
            className={classNames(font.className, "text-xl text-off-white")}
          >
            {totalPrice} Ξ
          </span>
        </div>
      </MintOptionBody>
      <motion.hr
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="my-4 border-t-2 border-off-white opacity-25"
      />
      <MintOptionBody>
        
        <MintButton amount={amount} value={totalPrice}/>
      </MintOptionBody>
    </div>
  );
};
