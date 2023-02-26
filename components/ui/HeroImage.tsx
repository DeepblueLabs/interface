import Image from "next/image";
import { CustomLocalLoader } from "@/components/ui/ImageLoader";

export const HeroImage = () => {
  return (
    <>
      <div className="w-full mx-auto">
        <div className="relative z-0 w-full lg:w-auto mt-8">
          <div className="relative overflow-hidden">
            <Image
              src={"/bg/hero-image-4x.jpeg"}
              alt="SharkPunks City"
              width={1600}
              height={1000}
              priority={true}
              className=""
              loader={CustomLocalLoader}
            />
          </div>
        </div>
      </div>
    </>
  );
};
