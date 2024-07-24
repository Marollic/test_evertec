import { NextRequest, NextResponse } from 'next/server';

// Define the list of public routes
const publicRoutes: string[] = ["/", "/api/webhook", "/api/healthcheck", "/api/uploadthing"];

// Middleware function
export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  // Check if the request is to a public route
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Check for authentication (customize this logic as needed)
  // const token = request.headers.get('authorization');

  // if (!token) {
    // Redirect to login page if not authenticated
  //   const url = new URL('/login', request.url);
  //   return NextResponse.redirect(url);
  // }

  // Continue to the requested page if authenticated
  return NextResponse.next();
}


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
