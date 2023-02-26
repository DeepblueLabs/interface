import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Share_Tech_Mono } from "@next/font/google";
import classNames from "classnames";
const font = Share_Tech_Mono({ weight: ["400"], subsets: ["latin"] });

export default function DisclosureComponent() {
  return (
    <div className="border border-teal">
      <Disclosure>
        {({ open }) => (
          <div className={font.className}>
            <div className="mx-auto w-full border border-transparent-white">
              <Disclosure.Button
                className={classNames(
                  "flex justify-between w-full px-4 py-1 text-left",
                  "text-off-white bg-transparent-white hover:bg-teal focus:outline-none focus-visible:ring focus-visible:ring-purple-500",
                  "focus-visible:ring-opacity-75"
                )}
              >
                <span>Utility holders</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-off-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-off-white">
                Get rewarded and exclusive access to major cutting-edge projects
                for seed investment rounds.
              </Disclosure.Panel>
            </div>
          </div>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <div className={font.className}>
            <div className="mx-auto w-full border border-transparent-white">
              <Disclosure.Button
                className={classNames(
                  "flex justify-between w-full px-4 py-1 text-left",
                  "text-off-white bg-transparent-white hover:bg-teal focus:outline-none focus-visible:ring focus-visible:ring-purple-500",
                  "focus-visible:ring-opacity-75"
                )}
              >
                <span>Problem Statement</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-off-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-off-white">
                The problem that SharkPunks aims to solve is the difficulty that
                many projects face in raising sufficient capital to successfully
                launch and grow. By allowing NFT holders to invest in these
                projects, SharkPunks helps to bridge the gap and provide
                much-needed funding for innovative and impactful projects.
              </Disclosure.Panel>
            </div>
          </div>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <div className={font.className}>
            <div className="mx-auto w-full border border-transparent-white">
              <Disclosure.Button
                className={classNames(
                  "flex justify-between w-full px-4 py-1 text-left",
                  "text-off-white bg-transparent-white hover:bg-teal focus:outline-none focus-visible:ring focus-visible:ring-purple-500",
                  "focus-visible:ring-opacity-75"
                )}
              >
                <span>Value proposition</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-off-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-off-white">
                SharkPunks is a unique collection of NFTs that offers exclusive
                access to a decentralized autonomous organization (DAO) focused
                on crowdfunding for real-world projects and the crypto industry.
                With only 5000 total NFTs available, membership in the
                SharkPunks DAO is highly coveted. Members can contribute capital
                to carefully curated projects and receive a share of the
                projects profits in return.
              </Disclosure.Panel>
            </div>
          </div>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <div className={font.className}>
            <div className="mx-auto w-full border border-transparent-white">
              <Disclosure.Button
                className={classNames(
                  "flex justify-between w-full px-4 py-1 text-left",
                  "text-off-white bg-transparent-white hover:bg-teal focus:outline-none focus-visible:ring focus-visible:ring-purple-500",
                  "focus-visible:ring-opacity-75"
                )}
              >
                <span>Tokenomics</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-off-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-off-white">
                The SharkPunks NFTs will be sold at different prices during
                different phases of the distribution process. These prices will
                be based on the supply and demand for the NFTs, as well as their
                rarity, exclusivity, and use case. The SharkPunks team will also
                consider any market trends or external factors that may impact
                the value of the NFTs.
              </Disclosure.Panel>
            </div>
          </div>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <div className={font.className}>
            <div className="mx-auto w-full border border-transparent-white">
              <Disclosure.Button
                className={classNames(
                  "flex justify-between w-full px-4 py-1 text-left",
                  "text-off-white bg-transparent-white hover:bg-teal focus:outline-none focus-visible:ring focus-visible:ring-purple-500",
                  "focus-visible:ring-opacity-75"
                )}
              >
                <span>Who is Deepblue Labs</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-off-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-off-white">
                SharkPunks is developed by DeepBlue Labs, a leading developer of
                cutting-edge web 3.0 projects. Our team includes well-known
                developers, core members of public chains and other
                infrastructure projects, and experts in blockchain governance
                and economic architecture.
              </Disclosure.Panel>
            </div>
          </div>
        )}
      </Disclosure>
    </div>
  );
}
