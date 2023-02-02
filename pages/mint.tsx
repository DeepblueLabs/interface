import Link from "next/link";
import { signOut } from "next-auth/react";
import { GetServerSideProps } from "next";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import type { NextPage } from "next";

// Moralis EVM API
import abi from "@/config/abi.json";

const Mint: NextPage<{ user: string }> = ({ user }) => {

  return (
    <>
      <h4>User session:</h4>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => signOut({ callbackUrl: "/login" })}>
        Sign out
      </button>
      <Link href={"/"}>Home</Link>
      <h4>TotalSupply SharkPunks V2</h4>
      <pre>{JSON.stringify(abi)}</pre>
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

export default Mint;
