// utils/amplify-utils.ts
import { cookies } from "next/headers";

import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { getCurrentUser } from "aws-amplify/auth/server";

import { type Schema } from "../../amplify/data/resource";
import outputs from "../../amplify_outputs.json";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
});

export const cookiesClient = generateServerClientUsingCookies<Schema>({
  config: outputs,
  cookies,
});

export async function AuthGetCurrentUserServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    });
    return currentUser;
  } catch (error) {
    console.error(error);
  }
}










// utils/amplifyServerUtils.ts
// import { createServerRunner } from "@aws-amplify/adapter-nextjs";
// import config from "@/aws-exports";


// console.log("process.env.NODE_ENV:", process.env.NODE_ENV, "server side");
// // O mesmo procedimento para produção e desenvolvimento
// const awsconfig = process.env.NODE_ENV === 'production' 
//   ? config
//   : require("../../amplify_outputs.json");



// export const { runWithAmplifyServerContext } = createServerRunner({
//   config: awsconfig,
// });


// Auth: {
//   Cognito: {
//     userPoolClientId: 'abcdefghij1234567890',
//     userPoolId: 'us-east-1_abcd1234',
//     loginWith: { // Optional
//       oauth: {
//         domain: 'abcdefghij1234567890-29051e27.auth.us-east-1.amazoncognito.com',
//         scopes: ['openid email phone profile aws.cognito.signin.user.admin '],
//         redirectSignIn: ['http://localhost:3000/','https://example.com/'],
//         redirectSignOut: ['http://localhost:3000/','https://example.com/'],
//         responseType: 'code',
//       }
//       username: 'true',
//       email: 'false', // Optional
//       phone: 'false', // Optional
//     }
//   }
// }