// utils/amplifyServerUtils.ts
import { createServerRunner } from "@aws-amplify/adapter-nextjs";

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("Cognito User Pool ID:", process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID);

// O mesmo procedimento para produção e desenvolvimento
const config = process.env.NODE_ENV === 'production' 
  ? {
    Auth: {
        Cognito:{
          identityPoolId: process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID!,
          region: process.env.NEXT_PUBLIC_AWS_REGION!,
          userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
          userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!,
          loginWith:{
            email: true
          }
        }
  
    },
  }
  : require("../../amplify_outputs.json");

export const { runWithAmplifyServerContext } = createServerRunner({
  config,
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