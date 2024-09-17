// components/ConfigureAmplifyClientSide.tsx
"use client";


import outputs from '../../amplify_outputs.json';
import { Amplify } from 'aws-amplify';

Amplify.configure(outputs, {
  ssr: true // required when using Amplify with Next.js
});

export default function RootLayoutThatConfiguresAmplifyOnTheClient({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}












// import { Amplify } from "aws-amplify";
// import { fetchAuthSession, signOut } from "aws-amplify/auth";
// import config from '@/aws-exports';


// console.log("process.env.NODE_ENV:", process.env.NODE_ENV, "client side");
// // Verificar se está em produção ou desenvolvimento
// const awsconfig =
//   process.env.NODE_ENV === "production"
//     ? config
//     : require("../../amplify_outputs.json");


// try {
//   Amplify.configure(awsconfig, { ssr: true,
//     API: {
//       GraphQL: {
//         headers: async () => {
//           try {
//             console.log("Fetching auth session");
//             const currentSession = await fetchAuthSession();
//             console.log(currentSession);
//             if (currentSession.tokens) {
//               const idToken = currentSession.tokens.idToken?.toString();
//               console.log(idToken);
//               return { Authorization: idToken };
//             } else {
//               signOut();
//               return {}; // Retornar um objeto vazio em vez de undefined
//             }
//           } catch (error) {
//             signOut();
//             return {}; // Retornar um objeto vazio em caso de erro
//           }
//         }
//       }
//     }
//   });
//   console.log("Amplify configured successfully client side");
//   console.log(awsconfig)
// } catch (error) {
//   console.error("Error configuring Amplify:", error);
// }


// export default function ConfigureAmplifyClientSide() {
//   return null;
// }
