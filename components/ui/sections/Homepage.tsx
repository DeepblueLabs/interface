import Image from "next/image";
import { motion } from "framer-motion";
import { CustomLocalLoader } from "@/components/ui/ImageLoader";

import { Container } from "@/components/ui/Container";
import { Share_Tech_Mono } from "@next/font/google";

import { Roadmap } from "@/components/ui/Roadmap";
import { Spliter } from "@/components/ui/Spliter";

const font = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

export const Homepage = () => {
  return (
    <div className={font.className}>
      <Container>
        {/* Hero Image */}
        <div className="flex flex-row">
          <motion.div
            className="w-full mx-auto lg:h-[80vh] flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={"/bg/hero-image-1xv2.png"}
              alt="Hero Image"
              width={1217}
              height={844}
              priority={true}
              loader={CustomLocalLoader}
            />
          </motion.div>
        </div>
        {/* Home Content */}
        <div className="container mx-auto py-0">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2">
              <motion.div
                className="text-off-white"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h1 className="text-2xl lg:text-4xl font-bold mb-4">
                  WELCOME TO THE <br />{" "}
                  <span className="text-mint-green">SHARKPUNKS COLLECTION</span>
                </h1>
                <p className="text-md mb-4">
                  SharkPunks is a collection of 5000 unique non-fungible tokens
                  (NFTs) on the Ethereum blockchain, each with a proof of
                  ownership. The project is inspired by the power of sharks in
                  the sense of nature and finance, and has real-world utility by
                  allowing access to real-world projects that have a benefit and
                  support new developments to projects of all kinds.
                </p>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 flex items-end justify-end">
              <div className="grid grid-cols-2 gap-2 lg:gap-3">
                <div className="rounded-md overflow-hidden shadow-lg shadow-mint-green">
                  <Image
                    src="/nft/img/47.png"
                    alt="image 1"
                    width={200}
                    height={200}
                    priority={true}
                    className=""
                    loader={CustomLocalLoader}
                  />
                </div>
                <div className="rounded-md overflow-hidden">
                  <Image
                    src="/nft/img/44.png"
                    alt="image 1"
                    width={200}
                    height={200}
                    priority={true}
                    loader={CustomLocalLoader}
                  />
                </div>
                <div className="rounded-md overflow-hidden">
                  <Image
                    src="/nft/img/53.png"
                    alt="image 1"
                    width={200}
                    height={200}
                    priority={true}
                    loader={CustomLocalLoader}
                  />
                </div>
                <div className="rounded-md overflow-hidden">
                  <Image
                    src="/nft/img/63.png"
                    alt="image 1"
                    width={200}
                    height={200}
                    priority={true}
                    loader={CustomLocalLoader}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between py-8">
            <div className="text-2xl lg:text-4xl mb-4 lg:mb-0">
              <h2 className="text-mint-green">
                DISTRIBUTION <br />
                <span className="text-lg text-off-white">
                  (Equal distribution, randomness positions)
                </span>
              </h2>
            </div>
            <div className="text-sm text-primary-text">
              Giving everyone an equal opportunity to acquire a SharkPunk.{" "}
              <br />
              Three different ways to get a SharkPunk.
            </div>
          </div>
          {/* Buy token container */}
          <div className="flex flex-col md:flex-row justify-center items-center bg-teal rounded-md">
            <div className="w-full md:w-1/3 p-6">
              <h2 className="text-center text-xl font-bold mb-4 text-mint-green">
                MINT A SHARKPUNK!
              </h2>
              <p className="text-center text-off-white text-sm">
                At the moment there are SharkPunks to be minted, hurry up and
                coin a totally unique SharkPunk.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-6">
              <h2 className="text-center text-xl font-bold mb-4 text-mint-green">
                BUY A SHARKPUNK ON OPENSEA
              </h2>
              <p className="text-center text-off-white text-sm">
                You can always look for an amazing SharkPunk that resembles your
                personality, the OpenSea market you can discover your favorite
                sharkpunk and make it yours.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-6">
              <h2 className="text-center text-xl font-bold mb-4 text-mint-green">
                EARN A FREE SHARKPUNK
              </h2>
              <p className="text-center text-off-white text-sm">
                We always support the community and we will raffle Shark Punks,
                keep an eye on our communication channels to access the
                lotteries.
              </p>
            </div>
          </div>
          {/* Split section */}
          <Spliter />
          {/* What is a unique collection? */}
          <div className="flex flex-col md:flex-row p-2 md:p-8">
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="text-2xl lg:text-4xl mb-4 lg:mb-0">
                <h2 className="text-mint-green">SHARKPUNKS SPECS</h2>
              </div>
              <p className="text-off-white md:text-md mb-8">
                Each SharkPunk is unique and generated from over 1 billion
                possible traits, including expression, headwear, clothing, and
                more. All sharks are dope, but some are rarer than others.{" "}
                <br />
                <br />
                The Sharks are stored as ERC-721 tokens on the Ethereum
                blockchain and hosted on IPFS. (See Record and Proof.)
                Purchasing an shark costs 0.01 ETH.
                <br />
                <br />
                To become a Blue Capital angel investor, you must be a
                SharkHolder. Good trip comrade!
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/nft/img/18.png"
                alt="image 1"
                width={1920}
                height={1920}
                priority={true}
                loader={CustomLocalLoader}
                className="w-full md:max-w-md h-auto"
              />
            </div>
          </div>
          <Spliter />
          {/* Welcome to Deepblue Labs and project associates */}
          <div className="container mx-auto px-4 py-8 md:flex md:flex-col md:items-left md:justify-center">
            {/* First row */}
            <div className="text-2xl lg:text-4xl mb-4 lg:mb-0">
              <h2 className="text-mint-green">WELCOME TO DEEPBLUE LABS</h2>
            </div>

            {/* Second row */}
            <div className="text-left mb-8">
              <p className="text-off-white md:text-md mb-8">
                When you buy a SharkPunk, you become part of a Deepblue Labs lab
                associate with privileges to have access and profit share from
                the blockchain and AI projects that have been developed by
                Deepblue Labs. In addition to becoming an angel investor for
                Blue Capital, the Next public investment fund that opens the
                doors to the public to invest in blockchain technology.
              </p>
            </div>

            {/* Third row */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
              <div className="flex flex-col items-center">
                <Image
                  src="/nft/img/92.png"
                  alt="Image 1"
                  width={150}
                  height={100}
                  className="rounded-lg"
                  loader={CustomLocalLoader}
                />
                <p className="text-off-white md:text-md mb-8">
                  10,000 SharkPunks <br /> uniques <br />
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/nft/img/16.png"
                  alt="Image 2"
                  width={150}
                  height={100}
                  className="rounded-lg"
                  loader={CustomLocalLoader}
                />
                <p className="text-off-white md:text-md mb-8">
                  All SharkPunks <br /> cost 0.1 ETH
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/nft/img/86.png"
                  alt="Image 3"
                  width={150}
                  height={100}
                  className="rounded-lg"
                  loader={CustomLocalLoader}
                />
                <p className="text-off-white md:text-md mb-8">
                  Ownership and owner <br /> of the SharkPunk
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/nft/img/79.png"
                  alt="Image 3"
                  width={150}
                  height={100}
                  className="rounded-lg"
                  loader={CustomLocalLoader}
                />
                <p className="text-off-white md:text-md mb-8">
                Your own PFP <br /> with your taste
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/nft/img/71.png"
                  alt="Image 3"
                  width={150}
                  height={100}
                  className="rounded-lg"
                  loader={CustomLocalLoader}
                />
                <p className="text-off-white md:text-md mb-8">
                  Get aditional <br /> benefits
                </p>
              </div>
            </div>
          </div>
          <Spliter />
          {/* Roadmap */}
          <Roadmap />
          {/* Verified Smart Contract */}
          <div className="flex justify-center items-center">
            <p className="text-center text-lg text-off-white">
              <span>VERIFIED SMART CONTRACT ADDRESS:</span>
              <a
                href="https://goerli.etherscan.io/address/0xb262c4074ec5bd3bd08bf5ff027896c0992f480d"
                className="text-mint-green underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
