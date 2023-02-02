import classNames from "classnames";
import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { useSession } from "next-auth/react";
import { Authentication } from "@/components/web3/Authentication/Authentication";

import { getEllipsisTxt } from "@/components/web3/utils/format";
import { Share_Tech_Mono } from "@next/font/google";
import { useEvmNativeBalance } from "@moralisweb3/next";
import { EvmAddress } from "moralis/common-evm-utils";
import { EvmChain } from "moralis/common-evm-utils";

const font = Share_Tech_Mono({ weight: ["400"], subsets: ["latin"] });

export const ConnectWallet = () => {
  const { data } = useSession();
  const address = data?.user?.address || EvmAddress.ZERO_ADDRESS;
  const chainId = EvmChain.GOERLI;

  const { data: nativeBalance } = useEvmNativeBalance({ address, chain: chainId });
  
  if (data?.user) {
    return (
      <>
        {/* Connected user: show wallet address and balance */}
        <Button
          variant="web3"
          size="small"
          classNames={classNames(font.className, "divide-off-white")}
        >
          <div className="hidden md:block divide-x">
            <span className="pr-2">{`${nativeBalance?.balance.ether.substring(0, 4)} ETH`}</span>
            <span className="pl-2">{getEllipsisTxt(data.user.address, 6)}</span>
          </div>
          <div className="md:hidden">
            <span>{getEllipsisTxt(data.user.address, 6)}</span>
          </div>
        </Button>
      </>
    );
  }

  return (
    <>
      <Modal
        name="Connect Wallet"
        title="Sign in with your wallet"
        closeMessage="Cancel"
      >
        <Authentication />
      </Modal>
    </>
  );
};
