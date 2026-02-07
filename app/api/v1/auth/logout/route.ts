import { type NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:8080";

export async function POST(request: NextRequest) {
  try {
    // Get session_id from incoming request cookies
    const sessionId = request.cookies.get("session_id")?.value;

    // Try to logout from backend if we have a session
    if (sessionId) {
      try {
        await fetch(`${API_BASE_URL}/api/v1/auth/logout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Cookie: `session_id=${sessionId}`,
          },
        });
      } catch {
        // Ignore backend errors - we'll clear the cookie anyway
      }
    }

    // Always clear the session cookie on the client side and return success
    const nextResponse = NextResponse.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );

    nextResponse.cookies.set("session_id", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0,
      path: "/",
    });

    return nextResponse;
  } catch (error) {
    console.error("[API Proxy] Logout error:", error);
    // Even on error, clear the cookie
    const nextResponse = NextResponse.json(
      { message: "Logged out" },
      { status: 200 }
    );
    nextResponse.cookies.set("session_id", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0,
      path: "/",
    });
    return nextResponse;
  }
}
