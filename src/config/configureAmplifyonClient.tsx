// components/ConfigureAmplifyClientSide.tsx
"use client";
import { Amplify } from "aws-amplify";

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("Cognito User Pool ID:", process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID);

// Verificar se está em produção ou desenvolvimento
const config = process.env.NODE_ENV === 'production' 
  ? {
      Auth: {
          identityPoolId: process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID!,
          region: process.env.NEXT_PUBLIC_AWS_REGION!,
          userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
          userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!,
      },
    }
  : require("../../amplify_outputs.json");

  try {
    Amplify.configure(config, { ssr: true });
    console.log("Amplify configurado com sucesso.");
  } catch (error) {
    console.error("Erro ao configurar o Amplify:", error);
  }
  

export default function ConfigureAmplifyClientSide() {
  return null;
}
