// utils/amplifyServerUtils.ts
import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { fetchAuthSession, signOut } from "aws-amplify/auth";

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
    data: {
      aws_region: process.env.NEXT_PUBLIC_AWS_REGION!,
      url: process.env.NEXT_PUBLIC_GRAPHQL_API_URL!,
      default_authorization_type: 'AMAZON_COGNITO_USER_POOLS', // ou outro tipo de autorização
      authorization_types: ['AMAZON_COGNITO_USER_POOLS'], // Lista de tipos de autorização
    },
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