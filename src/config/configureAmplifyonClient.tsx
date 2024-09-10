// components/ConfigureAmplifyClientSide.tsx
"use client";
import { Amplify } from "aws-amplify";


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
  Amplify.configure(config, { ssr: true });
  console.log("Amplify configured successfully");
} catch (error) {
  console.error("Error configuring Amplify:", error);
}

export default function ConfigureAmplifyClientSide() {
  return null;
}
