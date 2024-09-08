// components/ConfigureAmplifyClientSide.tsx
"use client";
import { Amplify } from "aws-amplify";

// Verificar se está em produção ou desenvolvimento
const config = process.env.NODE_ENV === 'production' 
  ? {
      Auth: {
        Cognito: {
          identityPoolId: process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID!,
          region: process.env.NEXT_PUBLIC_AWS_REGION!,
          userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
          userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!,
        }
      },
    }
  : require("../../amplify_outputs.json");

Amplify.configure(config, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}
