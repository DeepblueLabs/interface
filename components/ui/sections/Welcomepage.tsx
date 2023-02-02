import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { Welcome } from "@/components/ui/Welcome";
import { WelcomeTitle } from "@/components/ui/Welcome";
import { WelcomeMessage } from "@/components/ui/Welcome";
import { WelcomeButton } from "@/components/ui/Welcome";

import { ArrowLongDownIcon } from "@heroicons/react/24/solid";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: -100,
  },
};

export const Welcomepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <Welcome>
        <WelcomeTitle>Welcome to SharkPunks Collection</WelcomeTitle>
        <WelcomeMessage>
          SharkPunks is a collection of 5000 randomly generated SharkPunks.{" "}
          <br />
          Each SharkPunk has a unique DNA and is individually generated and
          stored on the Ethereum blockchain. <br />
          Exclusive NFTs for Fundraising into Deepblue Labs
        </WelcomeMessage>
        <ArrowLongDownIcon className="animate-bounce w-5 h-5 text-off-white mb-2" />
        <WelcomeButton message="Enter to Sea 🦈 | comming son" href="#CommingSoon" title="Comming soon"/>
      </Welcome>
    </motion.div>
  );
};
