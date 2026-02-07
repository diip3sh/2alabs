"use client";

import { useMutation } from "@tanstack/react-query";
import { type AuthRequest, login, register } from "@/lib/auth-api";

export function useLogin() {
  return useMutation({
    mutationFn: (credentials: AuthRequest) => login(credentials),
    onSuccess: (data) => {
      console.log("[useAuth] Login mutation success:", data);
    },
    onError: (error) => {
      console.error("[useAuth] Login mutation error:", error);
      console.error("[useAuth] Error message:", error.message);
      console.error("[useAuth] Error name:", error.name);
      if (error.cause) {
        console.error("[useAuth] Error cause:", error.cause);
      }
    },
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: (credentials: AuthRequest) => register(credentials),
    onSuccess: (data) => {
      console.log("[useAuth] Register mutation success:", data);
    },
    onError: (error) => {
      console.error("[useAuth] Register mutation error:", error);
      console.error("[useAuth] Error message:", error.message);
      console.error("[useAuth] Error name:", error.name);
      if (error.cause) {
        console.error("[useAuth] Error cause:", error.cause);
      }
    },
  });
}
