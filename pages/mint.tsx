import { GetServerSideProps } from 'next';
import { signOut } from 'next-auth/react';
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from './api/auth/[...nextauth]';
import Link from 'next/link';
import type { NextPage } from 'next';


const Mint: NextPage<{ user: string }> = ({ user }) => {
  return (
    <>
      <h4>User session:</h4>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => signOut({ callbackUrl: '/login'})}>Sign out</button>
      <Link href={'/'}>
        Home
      </Link>
    </>
  );
};


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
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    }
  };
};

export default Mint;