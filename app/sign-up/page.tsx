import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SignUpForm from "./sign-up-form";

export default async function SignUpPage() {
  const { userId } = await auth();

  if (userId) redirect("/");

  return <SignUpForm />;
}
