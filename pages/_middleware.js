import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  // checking the user session
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // redirect user
  const redirectUser = (path) => {
    const url = req.nextUrl.clone();
    url.pathname = path;
    return NextResponse.redirect(url);
  };
  if (session && req.nextUrl.pathname === '/signup') {
    return redirectUser('/');
  }
  if (session && req.nextUrl.pathname === '/auth/signin') {
    return redirectUser('/');
  }
  if (
    !session &&
    (req.nextUrl.pathname === '/' || req.nextUrl.pathname === '/profile')
  ) {
    return redirectUser('/signup');
  } else if (req.nextUrl.pathname === '/login') {
    if (session) redirectUser('/');
  }
}
