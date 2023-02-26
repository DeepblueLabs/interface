import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CustomLocalLoader } from "@/components/ui/ImageLoader";
import { Hero } from "@/components/ui/Hero";
import { HeroButton } from "@/components/ui/Hero";
import { HeroTitle, HeroSubtitle } from "@/components/ui/Hero";
import { HeroImage } from "@/components/ui/HeroImage";
import { Container } from "@/components/ui/Container";
import { Share_Tech_Mono } from "@next/font/google";

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
        <div className="container mx-auto md:mx-[4.0rem] py-0">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 lg:pr-12">
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
                <p className="text-lg mb-4">
                  SharkPunks is a collection of 5000 unique non-fungible tokens
                  (NFTs) on the Ethereum blockchain, each with a proof of
                  ownership. The project is inspired by the power of sharks in
                  the sense of nature and finance, and has real-world utility by
                  allowing access to real-world projects that have a benefit and
                  support new developments to projects of all kinds.
                </p>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center ">
              <div className="grid grid-cols-2 gap-2 lg:gap-4">
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
          {/* Separator */}
          <div className="py-4">
            <motion.hr
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              className="my-4 border-t-1 border-off-white opacity-25"
            />
          </div>
          {/* Distribution and Buy Shark */}
        </div>
      </Container>
    </div>
  );
};
