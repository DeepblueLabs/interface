import React from "react";
import { useState, useEffect } from "react";
import Image, { ImageLoader } from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from "framer-motion";
import { useEvmContractNFTs } from "@moralisweb3/next";
import { contractAddress } from "@/config/contract";
import classNames from "classnames";
import { Share_Tech_Mono } from "@next/font/google";

const font = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

export const Gallery = () => {
  const [filter, setFilter] = useState("");
  // set the image to the tokenUri or a placeholder
  const [image, setImage] = useState("/nft/img/7.png");

  const { data, cursor, page, pageSize, total, error, fetch, isFetching } =
    useEvmContractNFTs({
      address: contractAddress,
      chain: 5, // 5 = Goerli
    });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  console.log(data)

  const customLoaderNFT: ImageLoader = ({ src }) => {
    return `https://bafybeihqngv33elzpwrohscyxuduq3xx2zoy4wnjrbfyrtw52yeh2ylsn4.ipfs.nftstorage.link/${src}.png`;
  }

  return (
    <div className="flex flex-col sm:flex-row w-full h-auto text-off-white px-1 lg:px-[12.0rem]">
      <div className="flex flex-col w-full sm:w-1/4 p-4">
        <h1 className={classNames("text-2xl font-bold mb-4", font.className)}>
          Gallery
        </h1>
        <input
          type="text"
          placeholder="Filter by name or description"
          value={filter}
          onChange={handleFilterChange}
          className="p-2 mb-4 border border-gray-300 rounded bg-transparent"
        />
        {/* Other filter options */}
      </div>
      {/* Gallery */}
      <InfiniteScroll
        dataLength={data?.length || 0}
        next={fetch}
        hasMore={cursor !== null}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p className={classNames(font.className, "text-center")}>
            Yay! You have seen it all
          </p>
        }
      >
        <div className="flex flex-wrap justify-center p-4">
          {data?.map((nft) => (
            <div
              key={nft.tokenId}
              className="flex flex-col items-center justify-center sm:w-[100%] md:w-1/2 lg:w-1/3 p-3"
            >
              <Image
                src={`${nft.tokenId}`}
                alt={nft.tokenUri || "placeholder"}
                width={1024}
                height={1024}
                className="rounded-lg border border-teal"
                loader={customLoaderNFT}
              />
              <div className={font.className}>ς # {nft.tokenId}</div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
