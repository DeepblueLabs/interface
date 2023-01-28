import Head from 'next/head';
import { Header } from '@/components/ui/Header';
import { Container } from '@/components/ui/Container';
import { HomepageHero } from '@/components/ui/sections/HomepageHero';

// web3 components
import { Authentication } from '@/components/web3/Authentication/Authentication';

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
        <Container>
          <Header />
        </Container>
        <Container>
          <HomepageHero />
        </Container>
      </main>
    </>
  )
}