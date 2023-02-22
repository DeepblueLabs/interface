import Image from "next/image";
import { MintButton, MintSection } from "@/components/ui/MintComponents";
import { MintSubSection } from "@/components/ui/MintComponents";
import { MintTitle } from "@/components/ui/MintComponents";
import { MintDescription } from "@/components/ui/MintComponents";
import { MintImage } from "@/components/ui/MintComponents";
import { MintAmount } from "@/components/ui/MintComponents";
import { MintOptionHeader } from "@/components/ui/MintComponents";
import { MintOptionBody } from "@/components/ui/MintComponents";
import { MintPriceNFT } from "@/components/ui/MintComponents";
import { MintPriceTotal } from "@/components/ui/MintComponents";
import { motion } from "framer-motion";

import { Share_Tech_Mono } from "@next/font/google";
const font = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

export const Mintpage = () => {
  return (
    <>
      <MintSection>
        <MintTitle>Mint</MintTitle>
        <MintDescription>
          Mint your own unique NFTs on the Ethereum blockchain. Check below for
          utility holders and their respective minting limits.
        </MintDescription>
        <div className="flex flex-wrap">
          <MintSubSection>
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
          </MintSubSection>
          <MintSubSection>
            <div className="border border-teal">
              <MintOptionHeader title="Genesis mint" remaining={5000} />
              <div className="px-6 py-4">
                <MintOptionBody>
                  <MintAmount amount={2} />
                </MintOptionBody>
                <MintOptionBody>
                  <MintPriceNFT price={0.01} />
                </MintOptionBody>
                <MintOptionBody>
                  <MintPriceTotal price={0.02} />
                </MintOptionBody>
                <motion.hr
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                  className="my-4 border-t-2 border-off-white opacity-25"
                />
                <MintOptionBody>
                  <MintButton />
                </MintOptionBody>
              </div>
            </div>
            <div>
              <div className="border border-teal text-off-white">
                <div className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <h1 className={font.className}>Testnet phase</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MintSubSection>
        </div>
      </MintSection>
    </>
  );
};
