// RoadmapItem component

interface RoadmapItemProps {
  title: string;
  percent: number;
}

export const RoadmapItem = ({ title, percent }: RoadmapItemProps) => {
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full flex items-center justify-center font-medium text-off-white">
          {percent}%
        </div>
        <div className="ml-4">
          <h4 className="text-md italic text-off-white">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export const Roadmap = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:flex md:flex-col md:items-left md:justify-center" id="roadmap">
      <div className="text-2xl lg:text-4xl mb-4 lg:mb-0">
        <h2 className="text-mint-green">
          ROADMAP ACTIVATIONS <br />
          <span className="text-lg text-off-white">
            for a future with security and transparency ❤️
          </span>
        </h2>
      </div>
      <RoadmapItem title={"We pay our moms."} percent={10} />

      <RoadmapItem
        title={
          "5 SharkPunks will be released of which were withheld from sale for an airdrop 3 to holders and 2 to the community."
        }
        percent={20}
      />

      <RoadmapItem
        title={"SKP starts the development of the luxury clothing brand."}
        percent={40}
      />

      <RoadmapItem
        title={
          "SharkPunks holders have access to Blue Capital as angel. investors"
        }
        percent={60}
      />

      <RoadmapItem
        title={"The SharkPunk liquidity pool is initiated."}
        percent={80}
      />

      <RoadmapItem
        title={
          "The Mutant SharkPunk (NFT Breeding) When the zombies reach the ocean."
        }
        percent={100}
      />
    </div>
  );
};
