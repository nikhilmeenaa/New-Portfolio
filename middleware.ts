import { includes } from 'lodash';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const secret = process.env.NEXTAUTH_SECRET;
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret });
  const pathName = request.nextUrl.pathname;
  const protectedRoutes = ['/dashboard', 'profile'];
  const matchedProtedPaths = protectedRoutes.filter((route) =>
    pathName.includes(route)
  );

  // Check if user accessing routes, he should be logged in
  if (matchedProtedPaths.length > 0 && !token) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // If user is authenticated, then he should not be able to visit sign-in or sign-up page
  const includesSignOrOrSign =
    pathName.includes('sign-in') || pathName.includes('sign-up');
  if (token && includesSignOrOrSign) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/sign-up/:path*',
    '/sign-in/:path*',
    '/profile/:path*',
    '/dashboard/:path*',
  ],
};
