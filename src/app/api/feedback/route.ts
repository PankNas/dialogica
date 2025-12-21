import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type FeedbackParams = {
  name: string;
  phone: string;
  company: string;
  question: string;
  privacy: string;
};

export async function POST(req: Request) {
  try {
    const data: FeedbackParams = await req.json();

    const transporter = nodemailer.createTransport({
      // host: process.env.SMTP_HOST,
      host: '',
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Dialogica" <${process.env.NEXT_PUBLIC_SMTP_USER}>`,
      to: process.env.NEXT_PUBLIC_SMTP_USER,
      subject: 'Новая заявка с сайта',
      html: `
        <h2>Новая заявка</h2>
        <p><b>Имя:</b> ${data.name}</p>
        <p><b>Телефон:</b> <a href="tel:${data.phone}">${data.phone}</a></p>
        <p><b>Компания:</b> ${data.company || '-'}</p>
        <p><b>Вопрос / предложение:</b> ${data.question}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('MAIL ERROR', e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
