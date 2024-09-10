import { fetchAuthSession } from 'aws-amplify/auth/server';
import { NextRequest, NextResponse } from 'next/server';
import { runWithAmplifyServerContext } from '@/utils/amplify-server-util';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  // Verifica se o usuário já está autenticado
  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        // Verifica se a sessão possui tokens (ou seja, o usuário está autenticado)
        return session && session.tokens !== undefined;
      } catch (error) {
        console.error('Erro ao buscar sessão:', error);
        return false;
      }
    },
  });

  // Se o usuário não está autenticado, redireciona para a página de login
  if (!authenticated) {
    if (pathname !== '/') {
      // Redireciona para a página de login, evitando loops infinitos
      return NextResponse.redirect(new URL('/', request.url));
    }
  } else {
    // Se o usuário está autenticado e tenta acessar a página inicial, redireciona para o mapa
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/map', request.url));
    }
  }

  // Permite a navegação normal caso o usuário já esteja autenticado e na página correta
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
