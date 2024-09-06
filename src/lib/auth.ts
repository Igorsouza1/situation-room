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
    signIn: "/",
    signOut: "/goodbye",
    error: "/auth/error",
    newUser: "/welcome",
  },
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID ?? "",
      clientSecret: process.env.COGNITO_CLIENT_SECRET ?? "",
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user.username,
        };
      }
      return token;
    },

    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        },
      };
    },

    // Simplificação no redirecionamento
    async redirect({ baseUrl }) {
      console.log("Redirecionando para:", `${baseUrl}/map`); // Verificar o valor da URL
      return `${baseUrl}/map`; // Sempre redireciona para /map após o login
    },
  },
};
