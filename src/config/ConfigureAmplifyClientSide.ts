"use client";
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    userPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_USER_POOL_CLIENT_ID,
  }
}, { ssr: true }); // Habilita SSR

export default function ConfigureAmplifyClientSide() {
  return null; // Nenhuma interface visual é necessária
}
