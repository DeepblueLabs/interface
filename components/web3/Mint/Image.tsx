import React from "react";
import classNames from "classnames";

interface IMintElementProps {
    children: React.ReactNode;
    className?: string;
}

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