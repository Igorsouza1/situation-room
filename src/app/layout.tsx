import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

import ConfigureAmplifyClientSide from '@/config/configureAmplifyonClient';

import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import { fetchAuthSession, signOut } from "aws-amplify/auth";

Amplify.configure(outputs, { ssr: true,
  API: {
    GraphQL: {
      headers: async () => {
        try {
          const currentSession = await fetchAuthSession();
          if (currentSession.tokens) {
            const idToken = currentSession.tokens.idToken?.toString();
            return { Authorization: idToken };
          } else {
            signOut();
            return {}; // Retornar um objeto vazio em vez de undefined
          }
        } catch (error) {
          signOut();
          return {}; // Retornar um objeto vazio em caso de erro
        }
      }
    }
  }
});


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geomap",
  description: "Plataforma de dados geoespaciais",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
        <ConfigureAmplifyClientSide />
        {children}
        </>
      <Toaster />
      </body>
    </html>
  );
}
