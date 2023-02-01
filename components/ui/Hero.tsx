import React from "react";
import classNames from "classnames";

interface IHeroProps {
  children: React.ReactNode;
}

interface IHeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: IHeroElementProps) => {
  return (
    <h1
      className={classNames("text-5xl font-mono text-center py-2", className)}
    >
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children, className }: IHeroElementProps) => {
  return (
    <p className={classNames("text-lg text-center py-2 font-mono", className)}>
      {children}
    </p>
  );
};

export const HeroButton = ({ children, className }: IHeroElementProps) => {
  return (
    <button
      className={classNames(
        "bg-black text-white font-mono px-8 py-2 rounded-lg",
        className
      )}
    >
      {children}
    </button>
  );
};

export const HeroImage = ({ children, className }: IHeroElementProps) => {
  return (
    <div>
      <div className="w-full m-4 rounded-lg flex sm:flex-row flex-col shadow-md border-2 place-self-center">
        {children}
      </div>
    </div>
  );
};

export const Hero = ({ children }: IHeroProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen py-2">
      {children}
    </div>
  );
};
