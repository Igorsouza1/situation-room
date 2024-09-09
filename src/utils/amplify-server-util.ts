// utils/amplifyServerUtils.ts
import { createServerRunner } from "@aws-amplify/adapter-nextjs";

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("Cognito User Pool ID:", process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID);

// O mesmo procedimento para produção e desenvolvimento
const config = process.env.NODE_ENV === 'production' 
  ? {
    Auth: {
        identityPoolId: process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID!,
        region: process.env.NEXT_PUBLIC_AWS_REGION!,
        userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
        userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!,
        loginWith:{
          email: true
        }
    },
  }
  : require("../../amplify_outputs.json");

export const { runWithAmplifyServerContext } = createServerRunner({
  config,
});
