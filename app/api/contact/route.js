import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  const { name, email, message } = await request.json()

  // Configure nodemailer (replace with your email service details)
  let transporter = nodemailer.createTransport({
    host: "your-smtp-host",
    port: 587,
    secure: false,
    auth: {
      user: "your-email@example.com",
      pass: "your-password",
    },
  });

  try {
    await transporter.sendMail({
      from: '"Your Website" <your-email@example.com>',
      to: "recipient@example.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ message: "Message sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error sending message" }, { status: 500 })
  }
}