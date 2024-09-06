import { fetchAuthSession } from "aws-amplify/auth/server";
import { NextRequest, NextResponse } from "next/server";
import { runWithAmplifyServerContext } from "./utils/amplify-server-utils"; 
import { getUrl } from "./lib/get-url"; // Certifique-se de que o caminho está correto

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  console.log("Middleware de proteção de rotas");

  // Verifica a sessão de autenticação via AWS Amplify
  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return session.tokens !== undefined;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });

  // Redireciona para a página principal do app se o usuário tentar acessar '/auth' estando autenticado
  if (pathname === '/' && authenticated) {
    console.log("Usuário autenticado, redirecionando para o app.");
    return NextResponse.redirect(new URL(getUrl('/map')));
  }

  // Redireciona para a página de login se o usuário tentar acessar '/app' sem estar autenticado
  if (pathname.includes('/map') && !authenticated) {
    console.log("Usuário não autenticado, redirecionando para login.");
    return NextResponse.redirect(new URL(getUrl('/')));
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'], // Ajusta as rotas protegidas
};
