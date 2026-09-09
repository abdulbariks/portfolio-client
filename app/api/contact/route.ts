import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "b.studio.barik@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to send email. Please try again later.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
