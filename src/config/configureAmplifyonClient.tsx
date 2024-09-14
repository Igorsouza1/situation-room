// components/ConfigureAmplifyClientSide.tsx
"use client";
import { Amplify } from "aws-amplify";
import { fetchAuthSession, signOut } from "aws-amplify/auth";
import config from '@/aws-exports';


console.log("process.env.NODE_ENV:", process.env.NODE_ENV);
// Verificar se está em produção ou desenvolvimento
const awsconfig =
  process.env.NODE_ENV === "production"
    ? config
    : require("../../amplify_outputs.json");


try {
  Amplify.configure(awsconfig, { ssr: true,
    API: {
      GraphQL: {
        headers: async () => {
          try {
            console.log("Fetching auth session");
            const currentSession = await fetchAuthSession();
            console.log(currentSession);
            if (currentSession.tokens) {
              const idToken = currentSession.tokens.idToken?.toString();
              console.log(idToken);
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
  console.log("Amplify configured successfully");
  console.log(awsconfig)
} catch (error) {
  console.error("Error configuring Amplify:", error);
}


export default function ConfigureAmplifyClientSide() {
  return null;
}
