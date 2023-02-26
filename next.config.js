/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    path: 'https://ipfs.moralis.io'
  },
};

module.exports = nextConfig;
