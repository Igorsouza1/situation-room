// utils/amplifyServerUtils.ts
import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { fetchAuthSession, signOut } from "aws-amplify/auth";
import config from "@/aws-exports";

// O mesmo procedimento para produção e desenvolvimento
const awsconfig = process.env.NODE_ENV === 'production' 
  ? config
  : require("../../amplify_outputs.json");



export const { runWithAmplifyServerContext } = createServerRunner({
  config: awsconfig,
});


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