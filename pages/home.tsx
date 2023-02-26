import Head from "next/head";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { BottomNavbar } from "@/components/ui/BottomNavbar";
import { Homepage } from "@/components/ui/sections/Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>SharkPunks | Home</title>
        <meta name="description" content="SharkPunks home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-page-gradient pt-navigation-height">
        <div className="overflow-hidden">
          <Homepage />
        </div>
        <Footer />
      </main>
      <BottomNavbar />
    </>
  );
};