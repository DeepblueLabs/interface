"use client";
import Link from "next/link";
import classNames from "classnames";
import { motion } from "framer-motion";
import { Share_Tech_Mono } from "@next/font/google";
const font = Share_Tech_Mono({ weight: ["400"], subsets: ["latin"] });

interface IHeroProps {
  children: React.ReactNode;
}

interface IWelcomeTitleProps {
  children: React.ReactNode;
}

interface IWelcomeMessageProps {
  children: React.ReactNode;
}

interface IButtonProps {
  message: string;
}

export const WelcomeTitle = ({ children }: IWelcomeTitleProps) => {
  return (
    <h1
      className={classNames(
        "text-5xl text-center text-off-white",
        font.className
      )}
    >
      {children}
    </h1>
  );
};

export const WelcomeMessage = ({ children }: IWelcomeMessageProps) => {
  return (
    <p
      className={classNames(
        "text-lg text-center text-off-white py-4",
        font.className
      )}
    >
      {children}
    </p>
  );
};

export const WelcomeButton = ({ message }: IButtonProps) => {
  return (
    // button with framer motion
    <>
      <Link href="mint" passHref>
      <motion.button
        className={classNames(
          "items-center px-8 py-3 bg-mint-green hover:bg-blue-400 text-white rounded-lg shadow-md text-sm",
          font.className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}
      >
        {message}
      </motion.button>
      </Link>
    </>
  );
};
export const Welcome = ({ children }: IHeroProps) => {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center py-2">
        {children}
      </div>
    </div>
  );
};
