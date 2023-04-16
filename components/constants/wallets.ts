import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { InjectedConnector } from "wagmi/connectors/injected";

export const wallets = [
    {
      name: "Metamask",
      logoPath: "/assets/wallets/metamask.svg",
      connector: new MetaMaskConnector(),
    },
    {
      name: "Coinbase Wallet",
      logoPath: "/assets/wallets/coinbase.svg",
      connector: new WalletConnectConnector({
        options: {
          qrcode: false,
        }
      })
    },
    {
      name: "WalletConnect",
      logoPath: "/assets/wallets/walletconnect.svg",
      connector: new WalletConnectConnector({
        options: {
          rpc: [`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`],
          
        },
      }),
    },
    {
      name: "Injected",
      logoPath: "/assets/wallets/eth.svg",
      connector: new InjectedConnector({
        options: {
          name: "SharkPunks",
          shimDisconnect: true,
        }
      }),
    },
  ];