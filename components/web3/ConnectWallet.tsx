import { Button } from "@/components/ui/Button";
import { Share_Tech_Mono } from "@next/font/google";
const font = Share_Tech_Mono({ weight: ["400"], subsets: ["latin"] });


export const ConnectWallet = () => {
  return (
    <>
      <Button variant="primary" size="medium" classNames={font.className}>
        Connect
      </Button>
    </>
  );
};
