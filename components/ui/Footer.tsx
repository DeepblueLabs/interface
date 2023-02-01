import Link from "next/link";
import classNames from "classnames";
import { Container } from "@/components/ui/Container";
import { GithubIcon } from "../icons/GithubIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { footerLink } from "@/components/constants/footerLink";
import { Share_Tech_Mono } from "@next/font/google";
const font = Share_Tech_Mono({ weight: ["400"], subsets: ["latin"] });

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
      <Container className={classNames("flex flex-col justify-between lg:flex-row", font.className)}>
        <div>
          <div className="flex h-full flex-row justify-between lg:flex-col">
            <div className="flex items-center text-off-white">
              <span className="text-md">
                SharkPunks - © 2023 Deepblue Labs.
              </span>
            </div>
            <div className="mt-auto flex space-x-4 text-mint-green">
              <Link href={"https://github.com/DeepblueLabs"}>
                <GithubIcon />
              </Link>
              <Link href={"https://twitter.com/Deepblue_labs"}>
                <TwitterIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLink.map((column) => (
            <div
              key={column.title}
              className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
            >
              <h3 className="mb-3 text-off-white text-lg">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.title} className="[&_a]:last:mb-0">
                    <Link
                      className="mb-3 block text-off-white transition-colors hover:text-mint-green"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
