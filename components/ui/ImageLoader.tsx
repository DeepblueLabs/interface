// image loader is a function that takes a url and returns a promise that resolves to a data url
// NextJS

import { ImageLoader } from "next/image";

export const CustomLocalLoader: ImageLoader = ({ src, width, quality }) => {
    return `http://localhost:3000${src}?w=${width}&q=${quality || 75}`;
}

export const CustomLoaderNFT: ImageLoader = ({ src, width, quality }) => {
  return `https://bafybeihqngv33elzpwrohscyxuduq3xx2zoy4wnjrbfyrtw52yeh2ylsn4.ipfs.nftstorage.link/${src}.png`;
};
