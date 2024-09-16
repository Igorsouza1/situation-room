// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.
import { fetchAuthSession, signOut } from 'aws-amplify/auth';
import { data } from '../amplify/data/resource';
import { error } from 'node:console';
import { Errors } from 'aws-cdk-lib/aws-stepfunctions';


const config = {
  Auth: {
    Cognito: {
      identityPoolId: process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID!,
      region: process.env.NEXT_PUBLIC_AWS_REGION!,
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
      userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!,
      loginWith: {
        email: true,
      },
    },
  },
  
  data: {
    aws_region: process.env.NEXT_PUBLIC_AWS_REGION!,
    default_authorization_type: 'AMAZON_COGNITO_USER_POOLS', // Valor como string literal
    authorization_types: ['AMAZON_COGNITO_USER_POOLS'], // Valor como string literal
    url: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  },
  
  // API: {
  //   GraphQL: {
  //     headers: async () => {
  //       try {
  //         const currentSession = await fetchAuthSession();
  //         if (currentSession.tokens) {
  //           const idToken = currentSession.tokens.idToken?.toString();
  //           return { Authorization: idToken };
  //         } else {
  //           signOut();
  //           return {}; // Retornar um objeto vazio em vez de undefined
  //         }
  //       } catch (error) {
  //         signOut();
  //         return {}; // Retornar um objeto vazio em caso de erro
  //       }
  //     },
  //   },
  // },
};

export default config;