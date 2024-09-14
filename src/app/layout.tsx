import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";



import ConfigureAmplifyClientSide from '@/config/configureAmplifyonClient';
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import { fetchAuthSession, signOut } from "aws-amplify/auth";
import config from "@/aws-exports";


// Lógica para verificar se está em produção ou desenvolvimento
const awsconfig =
  process.env.NODE_ENV === "production"
    ? config
    : outputs; // Usar as saídas do amplify_outputs.json para desenvolvimento

try {
  Amplify.configure(awsconfig, {
    ssr: true,
    
  });
  console.log("Amplify configured successfully");
} catch (error) {
  console.error("Error configuring Amplify:", error);
}

console.log(config)

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
