import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      title,
      text,
      price,
      duration,
      durationDays,
      contactName,
      contactEmail,
      imageBase64,
    } = await request.json();

    // Prepare attachments if image exists
    const attachments = [];
    if (imageBase64) {
      // Extract base64 data and file type
      const matches = imageBase64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      
      if (matches && matches.length === 3) {
        const fileType = matches[1].split('/')[1];
        const base64Data = matches[2];
        
        attachments.push({
          filename: `advertisement-image.${fileType}`,
          content: base64Data,
          encoding: 'base64',
        });
      }
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: process.env.NEXT_PUBLIC_EMAIL_TO as string,
      subject: `Nueva solicitud de publicidad: ${title}`,
      html: `
        <h2>Nueva solicitud de publicidad</h2>
        <p><strong>Título:</strong> ${title}</p>
        <p><strong>Texto:</strong> ${text}</p>
        <p><strong>Precio:</strong> ${price}</p>
        <p><strong>Duración:</strong> ${duration} (${durationDays} días)</p>
        <p><strong>Nombre de contacto:</strong> ${contactName}</p>
        <p><strong>Email de contacto:</strong> ${contactEmail}</p>
      `,
      attachments,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
} 