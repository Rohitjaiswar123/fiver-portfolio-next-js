import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    
    if (!process.env.RESEND_API_KEY) {
      console.log('RESEND_API_KEY missing in production');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }
    
    const resend = new Resend(process.env.RESEND_API_KEY);
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
