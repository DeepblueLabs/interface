import React from "react";
import Image from "next/image";
import { MintTitle } from "@/components/web3/Mint/Title";
import { MintSection } from "@/components/web3/Mint/Section";
import { MintSubSection } from "@/components/web3/Mint/Section";
import { MintOptionHeader } from "@/components/web3/Mint/Header";
import { MintDescription } from "@/components/web3/Mint/Description";
import { MintImage } from "@/components/web3/Mint/Image";
import { Form } from "@/components/web3/Mint/Form";
import { CustomLocalLoader } from "../ImageLoader";
import DisclosureComponent from "@/components/ui/Disclosure";

export const SharkPunksMint = () => {
  return (
    <div>
      <MintSection>
        <MintTitle />
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
                width={1024}
                height={1024}
                className="border border-teal"
                priority={true}
                loader={CustomLocalLoader}
              />
            </MintImage>
          </MintSubSection>
          <MintSubSection>
            <div className="border border-teal">
              <MintOptionHeader />
              <div className="px-6 py-4">
                <Form />
              </div>
            </div>
            <DisclosureComponent />
          </MintSubSection>
        </div>
      </MintSection>
    </div>
  );
};
