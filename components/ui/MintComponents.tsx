import React from "react";
import classNames from "classnames";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { Share_Tech_Mono } from "@next/font/google";
const font = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

interface IMintProps {
  children: React.ReactNode;
}

interface IMintElementProps {
  children: React.ReactNode;
  className?: string;
}

interface IMintHeaderProps {
  title: string;
  remaining: number;
}

interface IMintAmountProps {
  amount: number;
  setAmount?: (amount: number) => void;
}

interface IMintPriceNFTProps {
  price: number;
}

export const MintTitle = ({ children, className }: IMintElementProps) => {
  return (
    <h1
      className={classNames(
        className,
        "text-4xl sm:text-5xl text-left text-off-white",
        font.className
      )}
    >
      {children}
    </h1>
  );
};

export const MintDescription = ({ children, className }: IMintElementProps) => {
  return (
    <p
      className={classNames(
        className,
        "text-md sm:text-lg text-left text-off-white",
        font.className
      )}
    >
      {children}
    </p>
  );
};

export const MintImage = ({ children, className }: IMintElementProps) => {
  return (
    <div
      className={classNames(
        className,
        "flex w-auto h-auto border justify-center items-center"
      )}
    >
      {children}
    </div>
  );
};

export const MintOptions = ({ children, className }: IMintElementProps) => {
  return (
    <div className="w-full md:w-1/2 p-3">
      <div className="flex w-full h-full border border-teal">
        <div className="rounded-lg shadow-md w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export const MintSection = ({ children }: IMintProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col py-8">{children}</div>
    </div>
  );
};

export const MintSubSection = ({ children, className }: IMintElementProps) => {
  return <div className={classNames("w-full md:w-1/2 sm:w-full p-3", className)}>{children}</div>;
};

export const MintOptionHeader = ({ title, remaining }: IMintHeaderProps) => {
  return (
    <div className="px-6 py-4 border-b border-transparent-white">
      <div className="text-lg text-off-white">
        <h2 className={classNames(font.className, "text-2xl")}>{title}</h2>
      </div>
      <p className={classNames(font.className, "text-md text-off-white")}>
        SharkPunks: {remaining}/5000
      </p>
    </div>
  );
};

export const MintOptionBody = ({ children }: IMintProps) => {
  return (
    <section className="flex items-center justify-between mb-4">
      {children}
    </section>
  );
};

export const MintAmount = ({ amount }: IMintAmountProps) => {
  return (
    <>
      <h3 className={classNames(font.className, "text-md text-off-white")}>
        Amount to mint
      </h3>
      <p className={classNames(font.className, "text-xl text-off-white")}>
        {amount}
      </p>
    </>
  );
};

export const MintPriceNFT = ({ price }: IMintPriceNFTProps) => {
  return (
    <>
      <h3 className={classNames(font.className, "text-md text-off-white")}>
        Price per NFT
      </h3>
      <p className={classNames(font.className, "text-xl text-off-white")}>
        {price} ETH
      </p>
    </>
  );
};

export const MintPriceTotal = ({ price }: IMintPriceNFTProps) => {
  return (
    <>
      <h3 className={classNames(font.className, "text-md text-off-white")}>
        Price total
      </h3>
      <p className={classNames(font.className, "text-xl text-off-white")}>
        {price} ETH
      </p>
    </>
  );
};

export const MintButton = () => {
  return (
    <>
      <div className="flex items-center text-off-white">
        <TwitterIcon />
      </div>
      <button className="bg-transparent text-off-white border border-off-white py-2 px-4 rounded-lg">
        Mint
      </button>
    </>
  );
};
