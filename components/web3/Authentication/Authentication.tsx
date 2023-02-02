import {
  Connector,
  useAccount,
  useConnect,
  useDisconnect,
  useSignMessage,
} from "wagmi";
import { Option } from "../Option";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";

import { Button } from "@/components/ui/Button";
import { ToastContainer, toast } from "react-toastify";
import { wallets } from "@/components/constants/wallets";
import { getEllipsisTxt } from "@/components/web3/utils/format";

import { Share_Tech_Mono } from "@next/font/google";
const font = Share_Tech_Mono({ weight: ["400"], subsets: ["latin"] });

export const Authentication = () => {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();
  const { data } = useSession();

  const { requestChallengeAsync } = useAuthRequestChallengeEvm();

  const handleAuth = async (connector?: Connector, disabled?: boolean) => {
    if (disabled) {
      // eslint-disable-next-line no-alert
      alert("Setup it first in the Authentication.tsx");
      return;
    }

    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({ connector });

    try {
      const challenge = await requestChallengeAsync({
        address: account,
        chainId: chain.id,
      });

      if (!challenge) {
        throw new Error("No challenge received");
      }

      const signature = await signMessageAsync({ message: challenge.message });
      const payload = `Authentication time: ${new Date().toLocaleString()}`;
      await signIn("moralis-auth", {
        message: challenge.message,
        signature,
        payload,
        redirect: false,
      });

      // redirects to main page
      push("mint");
    } catch (e) {
      toast.error("Error connecting wallet", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      <ToastContainer />;
    }
  };
  
  const handleDisconnect = async () => {
    await disconnectAsync();
    signOut({ callbackUrl: "/home" });
  };

  return (
    <div className="items-center mt-4">
      {wallets.map(({ name, logoPath, connector, disabled }) => (
        <Option
          disabled={disabled}
          key={name}
          logoPath={logoPath}
          name={name}
          onClick={() => handleAuth(connector, disabled)}
        />
      ))}
    </div>
  );
};
