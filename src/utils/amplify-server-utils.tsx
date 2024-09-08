import { createServerRunner } from "@aws-amplify/adapter-nextjs";

// Configuração do Amplify usando variáveis de ambiente
const config = {
  Auth: {
    Cognito:{
      userPoolId: process.env.user_pool_id ??  '',
      userPoolClientId: process.env.user_pool_client_id ?? '',
    }
  }
 
};

export const { runWithAmplifyServerContext } = createServerRunner({
  config, // Usa a configuração com variáveis de ambiente
});
