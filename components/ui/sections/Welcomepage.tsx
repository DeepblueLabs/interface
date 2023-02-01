import { Welcome } from "@/components/ui/Welcome";
import { WelcomeTitle } from "@/components/ui/Welcome";
import { WelcomeMessage } from "@/components/ui/Welcome";
import { WelcomeButton } from "@/components/ui/Welcome";

export const Welcomepage = () => {
  return (
    <Welcome>
      <WelcomeTitle>Welcome to SharkPunks Collection</WelcomeTitle>
      <WelcomeMessage>
        SharkPunks is a collection of 5000 randomly generated SharkPunks. <br />
        Each SharkPunk has a unique DNA and is individually generated and stored
        on the Ethereum blockchain. <br />
        Exclusive NFTs for Fundraising into Deepblue Labs
      </WelcomeMessage>
      <WelcomeButton message="Enter to Sea 🦈" />
    </Welcome>
  );
};
