import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ResetPasswordForm } from "./reset-password-form";


export default async function ResetPasswordPage() {
  const { userId } = await auth();

  if (userId) redirect("/");

  return <ResetPasswordForm />;
} 