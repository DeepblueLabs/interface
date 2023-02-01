import Image from "next/image";
import { motion } from "framer-motion";
import classNames from "classnames";

export const HeroImage = () => {
  return (
    <>
      <div className="w-full mx-auto mt-0 text-center md:w-10/12 lg:w-[50%] lg:h-[50%]">
        <div className="relative z-0 w-full lg:w-auto mt-8">
          <div className="relative overflow-hidden shadow-2xl">
            <Image
              src={"/bg/hero-image.png"}
              alt="SharkPunks"
              width={2048}
              height={2048}
            />
          </div>
        </div>
      </div>
    </>
  );
};
