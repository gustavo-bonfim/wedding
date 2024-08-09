import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const [AUTH_USER, AUTH_PASS] = (process.env.HTTP_BASIC_AUTH || ':').split(':');

export default function middleware(req: NextRequest) {
  const authenticated = isAuthenticated(req);

  if (!authenticated) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    });
  }

  return NextResponse.next();
}

function isAuthenticated(req: NextRequest) {
  const authheader =
    req.headers.get('authorization') || req.headers.get('Authorization');

  if (!authheader) {
    return false;
  }

  const auth = Buffer.from(authheader.split(' ')[1], 'base64')
    .toString()
    .split(':');
  const user = auth[0];
  const pass = auth[1];

  const isCorrect = user === AUTH_USER && pass === AUTH_PASS;

  return isCorrect;
}

export const config = {
  matcher: '/admin/invites',
};
