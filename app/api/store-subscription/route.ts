import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { price, contactName, contactEmail, subscriptionName, expireDate } =
      await request.json();

    const { data, error } = await resend.emails.send({
      // ! Utilizamos "rodrito.dev" como dominio de mail, por que es necesario para enviar a un email que no sea el de Resend
      // ! En un futuro, se debe cambiar por un dominio propio
      from: "RecyclApp <no-reply@rodrito.dev>",
      to: contactEmail,
      cc: process.env.NEXT_PUBLIC_EMAIL_ID as string,
      subject: `Nueva solicitud de suscripción a plan de tienda`,
      html: `
        <h2>Nueva solicitud de suscripción a plan de tienda</h2>
        <p><strong>Precio:</strong> ${price}</p>
        <p><strong>Nombre de contacto:</strong> ${contactName}</p>
        <p><strong>Email de contacto:</strong> ${contactEmail}</p>
        <p><strong>Cada cuanto se paga:</strong> ${expireDate}</p>
        <p><strong>Tipo de suscripción:</strong> ${subscriptionName}</p>
        
        <h3>Instrucciones de pago</h3>
        <p>Por favor, realice la transferencia al siguiente CBU/CVU:</p>
        <p><strong>CBU/CVU:</strong> 0000003100093276578392</p>

        <p>
          Una vez realizado el pago, responda a ${process.env.NEXT_PUBLIC_EMAIL_ID}
          adjuntando el comprobante de pago para proceder con la suscripción.
        </p>
        
        <p>¡Gracias por elegir nuestros servicios!</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
