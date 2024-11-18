import { auth } from "@clerk/nextjs/server";
import { SignInForm } from "./sign-in-form";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const { userId } = await auth();

  if (userId) redirect("/");

  return <SignInForm />;
}
