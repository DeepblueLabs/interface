import Image from "next/image";
import { MintSection } from "@/components/ui/MintComponents";
import { MintTitle } from "@/components/ui/MintComponents";
import { MintDescription } from "@/components/ui/MintComponents";
import { MintImage } from "@/components/ui/MintComponents";
import { MintOptions } from "@/components/ui/MintComponents";

import { motion } from "framer-motion";

import { Share_Tech_Mono } from "@next/font/google";
import classNames from "classnames";

import { TwitterIcon } from "@/components/icons/TwitterIcon";

const font = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

export const Mintpage = () => {
  return (
    <MintSection>
      <MintTitle>Mint</MintTitle>
      <MintDescription>
        Mint your own unique NFTs on the Ethereum blockchain. Check below for
        utility holders and their respective minting limits.
      </MintDescription>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 sm:w-full p-3">
          <MintImage>
            <Image
              src="/nft/img/7.png"
              alt="NFT Image"
              width={512}
              height={512}
              className="border border-teal"
              priority={true}
            />
          </MintImage>
        </div>
        <MintOptions className="md:w-1/2 sm:w-full">
          <div className="rounded-lg shadow-md w-full h-full">
            <div className="px-6 py-4 border-b border-transparent-white">
              <div className="text-lg text-off-white">
                <h2 className={classNames(font.className, "text-2xl")}>
                  Genesis mint
                </h2>
              </div>
              <p
                className={classNames(font.className, "text-md text-off-white")}
              >
                SharkPunks: 5000/5000
              </p>
            </div>
            <div className="px-6 py-4">
              <section className="flex items-center justify-between">
                <h3
                  className={classNames(
                    font.className,
                    "text-md text-off-white"
                  )}
                >
                  Amount to mint
                </h3>
                <p
                  className={classNames(
                    font.className,
                    "text-xl text-off-white"
                  )}
                >
                  2
                </p>
              </section>
              <section className="mt-4 flex items-center justify-between">
                <h3
                  className={classNames(
                    font.className,
                    "text-md text-off-white"
                  )}
                >
                  Price per NFT
                </h3>
                <p
                  className={classNames(
                    font.className,
                    "text-xl text-off-white"
                  )}
                >
                  0.01 ETH
                </p>
              </section>
              <section className="mt-4 flex items-center justify-between">
                <h3
                  className={classNames(
                    font.className,
                    "text-md text-off-white"
                  )}
                >
                  Total price
                </h3>
                <p
                  className={classNames(
                    font.className,
                    "text-xl text-off-white"
                  )}
                >
                  0.04 ETH
                </p>
              </section>
              <motion.hr
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                className="my-4 border-t-2 border-off-white opacity-25"
              />
              <section className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-off-white">
                  <TwitterIcon />
                </div>
                <button className="bg-transparent text-off-white border border-off-white py-2 px-4 rounded-lg">
                  Mint
                </button>
              </section>
            </div>
          </div>
        </MintOptions>
      </div>
    </MintSection>
  );
};
