import Head from "next/head";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { BottomNavbar } from "@/components/ui/BottomNavbar";
import { GetServerSideProps } from "next";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

import { Mintpage } from "@/components/ui/sections/Mintpage";

export default function Mint() {
  return (
    <>
      <Head>
        <title>SharkPunks | interface</title>
        <meta name="description" content="SharkPunks home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-page-gradient pt-navigation-height">
        <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
          <Mintpage />
        </div>
      </main>
      <BottomNavbar />
      <Footer />
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
        destination: "/",
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
