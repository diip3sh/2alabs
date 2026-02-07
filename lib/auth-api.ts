// Use local API proxy routes (same-origin) to avoid cross-domain cookie issues
const API_BASE_URL = "";

export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  message?: string;
  [key: string]: unknown;
}

export async function login(credentials: AuthRequest): Promise<AuthResponse> {
  console.log("[Auth API] Login called with:", { email: credentials.email });
  console.log("[Auth API] API_BASE_URL:", API_BASE_URL);

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(credentials),
    });

    console.log("[Auth API] Response status:", response.status);
    console.log("[Auth API] Response ok:", response.ok);
    console.log("[Auth API] Response headers:");
    response.headers.forEach((value, key) => {
      console.log(`  ${key}: ${value}`);
    });

    // Check for Set-Cookie header (won't be visible in browser JS due to security,
    // but browser will store it automatically)
    const setCookieHeader = response.headers.get("set-cookie");
    if (setCookieHeader) {
      console.log(
        "[Auth API] Set-Cookie header present (session_id sent by server)"
      );
      console.log("[Auth API] Set-Cookie value:", setCookieHeader);
    }

    // Note: HttpOnly cookies are NOT accessible via document.cookie
    // They are stored by the browser automatically and sent with subsequent requests
    if (typeof document !== "undefined") {
      console.log(
        "[Auth API] document.cookie (non-HttpOnly cookies only):",
        document.cookie
      );
      console.log(
        "[Auth API] Note: session_id is likely HttpOnly, so it won't appear above"
      );
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Auth API] Error response body:", errorText);

      let errorMessage = "Login failed";
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.message || errorJson.error || "Login failed";
      } catch {
        errorMessage = errorText || "Login failed";
      }

      throw new Error(errorMessage);
    }

    // Backend returns empty body with session_id in cookie
    console.log(
      "[Auth API] Login successful - session_id should be set in HttpOnly cookie"
    );

    return { message: "Login successful" };
  } catch (error) {
    console.error("[Auth API] Login fetch error:", error);
    throw error;
  }
}

export async function register(
  credentials: AuthRequest
): Promise<AuthResponse> {
  console.log("[Auth API] Register called with:", { email: credentials.email });
  console.log("[Auth API] API_BASE_URL:", API_BASE_URL);

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(credentials),
    });

    console.log("[Auth API] Response status:", response.status);
    console.log("[Auth API] Response ok:", response.ok);
    console.log("[Auth API] Response headers:");
    response.headers.forEach((value, key) => {
      console.log(`  ${key}: ${value}`);
    });

    // Check for Set-Cookie header
    const setCookieHeader = response.headers.get("set-cookie");
    if (setCookieHeader) {
      console.log(
        "[Auth API] Set-Cookie header present (session_id sent by server)"
      );
      console.log("[Auth API] Set-Cookie value:", setCookieHeader);
    }

    // Note: HttpOnly cookies are NOT accessible via document.cookie
    if (typeof document !== "undefined") {
      console.log(
        "[Auth API] document.cookie (non-HttpOnly cookies only):",
        document.cookie
      );
      console.log(
        "[Auth API] Note: session_id is likely HttpOnly, so it won't appear above"
      );
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Auth API] Error response body:", errorText);

      let errorMessage = "Registration failed";
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage =
          errorJson.message || errorJson.error || "Registration failed";
      } catch {
        errorMessage = errorText || "Registration failed";
      }

      throw new Error(errorMessage);
    }

    // Backend returns empty body with session_id in cookie
    console.log(
      "[Auth API] Register successful - session_id should be set in HttpOnly cookie"
    );

    return { message: "Registration successful" };
  } catch (error) {
    console.error("[Auth API] Register fetch error:", error);
    throw error;
  }
}
