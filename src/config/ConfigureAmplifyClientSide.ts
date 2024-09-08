"use client";
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito:{
      userPoolId: process.env.user_pool_id ??  '',
      userPoolClientId: process.env.user_pool_client_id ?? '',
    }
  }
}, { ssr: true }); // Habilita SSR

export default function ConfigureAmplifyClientSide() {
  return null; // Nenhuma interface visual é necessária
}
