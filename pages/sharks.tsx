import Head from "next/head";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { BottomNavbar } from "@/components/ui/BottomNavbar";
import { Gallery } from "@/components/web3/Sharks/Gallery";

export default function Sharks() {
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
        <div className="overflow-hidden">
          <Gallery />
        </div>
        <Footer />
      </main>
      <BottomNavbar />
    </>
  );
}
