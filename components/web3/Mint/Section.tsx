import React from "react";
import classNames from "classnames";

interface IMintProps {
  children: React.ReactNode;
  className?: string;
}

export const MintSection = ({ children }: IMintProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col py-8">{children}</div>
    </div>
  );
};

export const MintSubSection = ({ children, className }: IMintProps) => {
  return (
    <div className={classNames("w-full md:w-1/2 sm:w-full p-3", className)}>
      {children}
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

