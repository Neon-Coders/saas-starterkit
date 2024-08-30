"use client";

import { useFormState } from "react-dom";
import Link from "next/link";

import { APP_TITLE } from "@/lib/constants";
import { signup } from "@/lib/auth/actions";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/submit-button";
import { PasswordInput } from "@/components/password-input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Signup() {
  const [state, formAction] = useFormState(signup, null);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">Sign up for {APP_TITLE}</CardTitle>
        <CardDescription>Enter your information to create an account</CardDescription>
      </CardHeader>

      <CardContent>
        <form action={formAction} className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="text">First Name</Label>
            <Input
              id="first_name"
              name="first_name"
              required
              placeholder="Anna"
              autoComplete="additional-name"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="text">Last Name</Label>
            <Input
              id="last_name"
              name="last_name"
              required
              placeholder="Johnson"
              autoComplete="additional-name"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              required
              placeholder="email@example.com"
              autoComplete="email"
              name="email"
              type="email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <PasswordInput
              id="password"
              name="password"
              required
              autoComplete="current-password"
              placeholder="********"
            />
          </div>

          {state?.fieldError ? (
            <ul className="list-disc space-y-1 rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
              {Object.values(state.fieldError).map((err) => (
                <li className="ml-4" key={err}>
                  {err}
                </li>
              ))}
            </ul>
          ) : state?.formError ? (
            <p className="rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
              {state?.formError}
            </p>
          ) : null}
          <div>
            <Link href={"/login"}>
              <span className="p-0 text-xs font-medium underline-offset-4 hover:underline">
                Already signed up? Login instead.
              </span>
            </Link>
          </div>

          <SubmitButton className="w-full" aria-label="submit-btn">
            Sign Up
          </SubmitButton>
        </form>
      </CardContent>
    </Card>
  );
}
