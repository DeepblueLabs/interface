import Head from "next/head";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/ui/Header";
import { Breadcrum } from "@/components/ui/Breadcrum";
import { BottomNavbar } from "@/components/ui/BottomNavbar";

import { GetServerSideProps } from "next";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import classNames from "classnames";

export default function Mint() {
  return (
    <>
      <Head>
        <title>SharkPunks | interface</title>
        <meta name="description" content="SharkPunks home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
      </Container>
      <main className="bg-page-gradient pt-navigation-height">
        <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
          <Container className="py-[4rem]">
            <div className="container mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-3 text-off-white">
                  <h1>
                    <span className="text-4xl font-mono">Mint | 🦈</span>
                  </h1>

                </div>
                <div className="w-full md:w-1/2 p-3">

                </div>
              </div>
            </div>
          </Container>
        </div>
      </main>
      <BottomNavbar />
    </>
  );
}

// gets the session from the server
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
};
