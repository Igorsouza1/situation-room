import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "joao@example.com",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        

        const existingUser = await db.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!existingUser) {
          return null;
        }

        const passwordMatch = await compare(
          credentials.password,
          existingUser.passwordHash
        );

        if (!passwordMatch) {
          return null;
        }

        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          email: existingUser.email,
          name: existingUser.nome,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user}) {
        if(user){
            return{
                ...token,
                username: user.username
            }
        }
        return token
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
            ...session.user,
            username: token.username
        }
      }
    },
  },
};