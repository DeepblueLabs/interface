import React from "react";
import classNames from "classnames";
import { Share_Tech_Mono } from "@next/font/google";
const font = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

interface IMintProps {
  children: React.ReactNode;
}

interface IMintElementProps {
  children: React.ReactNode;
  className?: string;
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
        {children}
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
