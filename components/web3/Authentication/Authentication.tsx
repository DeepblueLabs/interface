import {
  Connector,
  useAccount,
  useConnect,
  useDisconnect,
  useSignMessage,
} from "wagmi";

import { Option } from "../Option";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { wallets } from "@/components/constants/wallets";

import { ToastContainer, toast } from "react-toastify";
import { Button } from "@/components/ui/Button";
import { PowerIcon } from "@heroicons/react/20/solid";

export const Disconnect = () => {
  const { disconnectAsync } = useDisconnect();

  const handleDisconnect = async () => {
    await disconnectAsync();
    signOut({ callbackUrl: "/home" });
  };

  return (
    <div>
      <Button>
        <PowerIcon className="h-3 w-3 ml-2" onClick={handleDisconnect}/>
      </Button>
    </div>
  );
};

export const Authentication = () => {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();

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

  return (
    <div className="items-center mt-4">
      {wallets.map(({ name, logoPath, connector }) => (
        <Option
          disabled={false}
          key={name}
          logoPath={logoPath}
          name={name}
          onClick={() => handleAuth(connector, false)}
        />
      ))}
    </div>
  );
};
