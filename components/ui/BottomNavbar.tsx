import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { navbarLinks } from "@/components/constants/navbarLinks";
import { Share_Tech_Mono } from "@next/font/google";
const font = Share_Tech_Mono({ weight: ["400"], subsets: ["latin"] });

export const BottomNavbar = () => {
  return (
    <div className="lg:hidden">
      <nav className="fixed bottom-0 left-0 w-full bg-white border border-transparent-white shadow">
        <div className="container mx-auto flex items-center justify-center px-4 py-3">
          <div className="flex items-center justify-center gap-5">
            {navbarLinks.map((link) => (
              <li
                key={link.href}
                className={classNames("text-off-white [&_a]:last:mb-0 list-none", font.className)}
              >
                <Link href={link.href} passHref>
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

{
  /* <div
  className={`flex items-center px-3 py-2 rounded-full text-sm font-medium text-off-white bg-${
    selectedTab === "home" ? "blue-500" : "gray-300"
  } hover:bg-blue-500 hover:text-mint-green focus:outline-none focus:shadow-outline`}
  onClick={() => setSelectedTab("home")}
>
</div> */
}
