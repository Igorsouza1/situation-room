import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

import ConfigureAmplifyClientSide from '@/config/configureAmplifyonClient';

import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import { fetchAuthSession, signOut } from "aws-amplify/auth";
// Lógica para verificar se está em produção ou desenvolvimento
const config =
  process.env.NODE_ENV === "production"
    ? {
        Auth: {
          Cognito: {
            identityPoolId: process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID!,
            region: process.env.NEXT_PUBLIC_AWS_REGION!,
            userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
            userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!,
            loginWith: {
              email: true,
            },
          },
        },
        data: {
          aws_region: process.env.NEXT_PUBLIC_AWS_REGION!,
          url: process.env.NEXT_PUBLIC_GRAPHQL_API_URL!,
          default_authorization_type: 'AMAZON_COGNITO_USER_POOLS',
          authorization_types: ['AMAZON_COGNITO_USER_POOLS'],
        },
      }
    : outputs; // Usar as saídas do amplify_outputs.json para desenvolvimento

try {
  Amplify.configure(config, {
    ssr: true,
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
        },
      },
    },
  });
  console.log("Amplify configured successfully");
} catch (error) {
  console.error("Error configuring Amplify:", error);
}



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
