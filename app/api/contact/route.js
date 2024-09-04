import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  // Configure nodemailer with your email service details
  let transporter = nodemailer.createTransport({
    host: "smtp.your-email-provider.com", // Replace with your SMTP server
    port: 587, // Use 465 for secure (true) or 587 for secure (false)
    secure: false, // true for 465, false for other ports
    auth: {
      user: "your-email@example.com", // Replace with your email
      pass: "your-email-password", // Replace with your email password
    },
  });

  try {
    await transporter.sendMail({
      from: '"Your Website" <your-email@example.com>', // Replace with your email
      to: "recipient@example.com", // Replace with the recipient's email
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error sending message" }, { status: 500 });
  }
}
