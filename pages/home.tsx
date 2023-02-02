import Head from "next/head";
import { Header } from "@/components/ui/Header";
import { BottomNavbar } from "@/components/ui/BottomNavbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>SharkPunks | interface</title>
        <meta name="description" content="SharkPunks home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      </main>
      <BottomNavbar />
    </>
  );
}
