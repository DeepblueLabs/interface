// image loader is a function that takes a url and returns a promise that resolves to a data url
// NextJS

import { ImageLoader } from "next/image";

export const CustomLocalLoader = ({ src, width, quality }) => {
  if(src[0] === "/") src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");
  var urlEndpoint = "https://ik.imagekit.io/your_imagekit_id";
  if(urlEndpoint[urlEndpoint.length-1] === "/") urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/${src}?tr=${paramsString}`
}

export const CustomLoaderNFT: ImageLoader = ({ src, width, quality }) => {
  return `https://bafybeihqngv33elzpwrohscyxuduq3xx2zoy4wnjrbfyrtw52yeh2ylsn4.ipfs.nftstorage.link/${src}.png`;
};
