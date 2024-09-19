import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import Auth from "@/components/auth/auth";


import ConfigureAmplifyClientSide from '@/components/configureAmplifyonClient';
// import { Amplify } from "aws-amplify";
// import outputs from "../../amplify_outputs.json";
// import { fetchAuthSession, signOut } from "aws-amplify/auth";
// import config from "@/aws-exports";

// console.log("process.env.NODE_ENV:", process.env.NODE_ENV, "layout");

// // Lógica para verificar se está em produção ou desenvolvimento
// const awsconfig = process.env.NODE_ENV === "production" ? config : outputs; // Usar as saídas do amplify_outputs.json para desenvolvimento

// Amplify.configure(awsconfig, {
//   ssr: true,
//   API: {
//     GraphQL: {
//       headers: async () => {
//         try {
//           const currentSession = await fetchAuthSession();
//           if (currentSession.tokens) {
//             const idToken = currentSession.tokens.idToken?.toString();
//             return { Authorization: idToken };
//           } else {
//             signOut();
//             return {}; // Retornar um objeto vazio em vez de undefined
//           }
//         } catch (error) {
//           signOut();
//           return {}; // Retornar um objeto vazio em caso de erro
//         }
//       },
//     },
//   },
// });

// console.log(config);

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
          <ConfigureAmplifyClientSide >
            <Auth>
            {children}
            </Auth>
          </ConfigureAmplifyClientSide>
          
          <Toaster />
        </body>
      </html>
  );
}
