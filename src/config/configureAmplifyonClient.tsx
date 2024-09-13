// components/ConfigureAmplifyClientSide.tsx
"use client";
import { Amplify } from "aws-amplify";
import { fetchAuthSession, signOut } from "aws-amplify/auth";

// Verificar se está em produção ou desenvolvimento
const config =
  process.env.NODE_ENV === "production"
    ? {
        Auth: {
          Cognito: {
            identityPoolId: process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID!,
            region: process.env.NEXT_PUBLIC_AWS_REGION!,
            userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
            userPoolClientId:
            process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!,
            loginWith: {
              email: true,
            },
          },
        },
      }
    : require("../../amplify_outputs.json");


try {
  Amplify.configure(config, { ssr: true,
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
  console.log("Amplify configured successfully");

} catch (error) {
  console.error("Error configuring Amplify:", error);
}

export default function ConfigureAmplifyClientSide() {
  return null;
}
