import classNames from "classnames";
import { Share_Tech_Mono } from "@next/font/google";
const font = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

interface IMintElementProps {
  children: React.ReactNode;
  className?: string;
}

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
