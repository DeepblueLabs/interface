import Head from "next/head";
import { Container } from "@/components/ui/Container";
import { HomeNavbar } from "@/components/ui/HeaderHome";
import { HeroImage } from "@/components/ui/HeroImage";
import { Welcomepage } from "@/components/ui/sections/Welcomepage";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>SharkPunks | interface</title>
        <meta name="description" content="SharkPunks mint page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeNavbar />
        <HeroImage />
        <Container>
          <Welcomepage />
        </Container>
      </main>
    </>
  );
}
