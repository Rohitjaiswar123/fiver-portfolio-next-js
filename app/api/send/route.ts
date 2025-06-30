import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['rohit.s.jaiswar@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
