import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { createClient, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { infuraProvider } from "wagmi/providers/infura";
import { mainnet, goerli } from "wagmi/chains";

import "@/styles/globals.css";

const { provider, webSocketProvider } = configureChains(
  [mainnet, goerli],
  [infuraProvider({ apiKey: process.env.INFURA_API_KEY }), publicProvider()]
);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Component {...pageProps} />
      </SessionProvider>
    </WagmiConfig>
  );
}
