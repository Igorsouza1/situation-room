import { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db"; // Sua conexão com o Prisma

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/", // Página de login personalizada
  },
  providers: [
    // Amazon Cognito Provider
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID ?? "",
      clientSecret: process.env.COGNITO_CLIENT_SECRET ?? "",
      issuer: process.env.COGNITO_ISSUER, // URL no formato: https://cognito-idp.{region}.amazonaws.com/{PoolId}
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          email: user.email,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          email: token.email,
        },
      };
    },
  },
};
