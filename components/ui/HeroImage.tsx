import Image from "next/image";

export const HeroImage = () => {
  return (
    <>
      <div className="w-full mx-auto mt-0 text-center md:w-10/12 lg:w-[50%] lg:h-[50%] border-x border-mint-green">
        <div className="relative z-0 w-full lg:w-auto mt-8">
          <div className="relative overflow-hidden">
            <Image
              src={"/bg/hero-image.png"}
              alt="SharkPunks City"
              width={2048}
              height={2048}
              priority={true}
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
