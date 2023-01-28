import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth';
import { MoralisNextAuthProvider } from '@moralisweb3/next';

export const authOptions: NextAuthOptions = {
  providers: [MoralisNextAuthProvider()],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      (session as { user: unknown }).user = token.user;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
}

export default NextAuth(authOptions);