import sgMail from "@sendgrid/mail";
import { SENDGRID_API_KEY } from "../const";

sgMail.setApiKey(SENDGRID_API_KEY);

const send = async (msg: any) => {
  try {
    const result = await sgMail.send(msg);
    return result;
    console.log("Email sent successfully");
  } catch (e) {
    console.error("Error sending email:", e);
    throw new Error("Failed to send email");
  }
};

const emailTemplate = (
  name: string,
  email: string,
  phoneNumber: string,
  selectedSubjectsTypes: string,
  message: string,
) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      h1 {
        color: #333;
        text-align: center;
      }
      p {
        color: #666;
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 20px;
      }
      .footer {
        margin-top: 20px;
        text-align: center;
        color: #999;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Hello ${name},</h1>
      <p><strong>Contact Details:</strong></p>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone Number:</strong> ${phoneNumber}</li>
        <li><strong>Subjects:</strong> ${selectedSubjectsTypes}</li>
      </ul>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    </div>
  </body>
  </html>
`;

export const sendEmail = async (
  name: string,
  email: string,
  phoneNumber: string,
  selectedSubjectsTypes: string,
  message: string,
) => {
  const msg = {
    to: "ctbeczak08@gmail.com",
    from: "ctbeczak08@gmail.com",
    subject: selectedSubjectsTypes,
    html: emailTemplate(name, email, phoneNumber, selectedSubjectsTypes, message),
  };

  return send(msg);
};
