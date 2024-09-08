import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

import { Amplify } from "aws-amplify";
// Configuração do Amplify usando variáveis de ambiente
const amplifyConfig = {
  Auth: {
    Cognito:{
      userPoolId: process.env.user_pool_id ??  '',
      userPoolClientId: process.env.user_pool_client_id ?? '',
    }
  }
};

// Configura o Amplify
Amplify.configure(amplifyConfig, { ssr: true }); // ssr: true para garantir SSR com Next.js




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
