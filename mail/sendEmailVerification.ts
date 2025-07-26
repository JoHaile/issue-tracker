import { User } from "better-auth";
import nodemailer from "nodemailer";

export async function sendEmailVerification(url: string, user: User) {
  const message = {
    from: "yohannes.h93@gmail.com",
    to: user.email,
    subject: "Verification of the Email Address",
    text: `hello ${user.name} verify your email by click this url ${url}`,

    headers: {
      "X-Entity-Ref-ID": "newmail",
    },
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail(message);
  } catch (error) {
    console.log("Something went wrong. Please try again later!", error);
  }
}
