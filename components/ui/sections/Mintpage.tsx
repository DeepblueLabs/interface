import Image from "next/image";
import { MintSection } from "@/components/ui/MintComponents";
import { MintTitle } from "@/components/ui/MintComponents";
import { MintDescription } from "@/components/ui/MintComponents";
import { MintImage } from "@/components/ui/MintComponents";
import { MintOptions } from "@/components/ui/MintComponents";

export const Mintpage = () => {
  return (
    <MintSection>
      <MintTitle>Mint</MintTitle>
      <MintDescription>
        Mint your own unique NFTs on the Ethereum blockchain. Check below for
        utility holders and their respective minting limits.
      </MintDescription>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-3">
          <MintImage>
            <Image
              src="/nft/img/7.png"
              alt="NFT Image"
              width={512}
              height={512}
              className="border border-teal"
            />
          </MintImage>
        </div>
        <div className="w-full md:w-1/2 p-3">
          <div className="flex w-auto h-auto border justify-center items-center text-off-white">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In veritatis assumenda repellendus nulla atque a! Repudiandae aliquam veniam aspernatur perspiciatis quibusdam! Explicabo eius quibusdam minus sapiente architecto ex, velit fugit.</p>
          </div>
        </div>
      </div>
    </MintSection>
  );
};
