"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegister } from "@/hooks/use-auth";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerMutation = useRegister();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return;
    }

    registerMutation.mutate(
      { email, password },
      {
        onSuccess: () => {
          router.push("/home");
        },
      }
    );
  };

  const passwordsMatch = password === confirmPassword;
  const showPasswordError = confirmPassword.length > 0 && !passwordsMatch;

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="font-bold text-2xl">Register</CardTitle>
          <CardDescription>
            Create an account by entering your email and password
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="youremail@gmail.com"
                required
                type="email"
                value={email}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
                type="password"
                value={password}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="confirm password"
                required
                type="password"
                value={confirmPassword}
              />
              {showPasswordError && (
                <p className="text-destructive text-sm">
                  Passwords do not match
                </p>
              )}
            </div>
            {registerMutation.isError && (
              <p className="text-destructive text-sm">
                {registerMutation.error?.message ||
                  "Registration failed. Please try again."}
              </p>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button
              className="w-full"
              disabled={
                registerMutation.isPending ||
                (confirmPassword.length > 0 && !passwordsMatch)
              }
              type="submit"
            >
              {registerMutation.isPending
                ? "Creating account..."
                : "Create account"}
            </Button>
            <p className="text-muted-foreground text-sm">
              Already have an account?{" "}
              <Link
                className="text-primary underline-offset-4 hover:underline"
                href="/login"
              >
                Login
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
