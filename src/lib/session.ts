import { cache } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

export const getSession = cache(async () =>
  auth.api.getSession({ headers: await headers() }),
);

export async function requireSession(redirectTo: string) {
  const session = await getSession();
  if (!session) {
    redirect(`/signin?redirect=${encodeURIComponent(redirectTo)}`);
  }
  return session;
}
