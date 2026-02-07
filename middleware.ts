import { type NextRequest, NextResponse } from "next/server";

// Define protected routes that require authentication
const protectedRoutes = ["/dashboard", "/dashboard/", "/home"];

// Define auth routes that should redirect to dashboard if already logged in
const authRoutes = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check for session_id cookie
  const sessionId = request.cookies.get("session_id")?.value;
  const isAuthenticated = !!sessionId;

  console.log("[Middleware] Path:", pathname);
  console.log("[Middleware] Session ID present:", isAuthenticated);

  // Handle root path - redirect based on auth status
  if (pathname === "/") {
    if (isAuthenticated) {
      console.log("[Middleware] Root: Redirecting to /home (authenticated)");
      return NextResponse.redirect(new URL("/home", request.url));
    } else {
      console.log("[Middleware] Root: Redirecting to /login (not authenticated)");
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // If user is accessing a protected route without session_id, redirect to login
  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isProtectedRoute && !isAuthenticated) {
    console.log("[Middleware] Redirecting to login (no session)");
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If user is accessing auth routes (login/register) with session_id, redirect to dashboard
  const isAuthRoute = authRoutes.some((route) => pathname === route);

  if (isAuthRoute && isAuthenticated) {
    console.log(
      "[Middleware] Redirecting to dashboard (already authenticated)"
    );
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api routes
     */
    "/((?!_next/static|_next/image|favicon.ico|api/|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
