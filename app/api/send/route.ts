import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log("data", data);

    const { data: emailData, error } = await resend.emails.send({
      from: "RecyclApp <onboarding@resend.dev>",
      to: [process.env.NEXT_PUBLIC_EMAIL_TO!],
      subject: "Nuevo mensaje de contacto - RecyclApp",
      react: EmailTemplate({
        email: data.email,
        message: data.message,
        name: data.name,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    console.log("emailData", emailData);

    return Response.json({ success: true, emailData });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}