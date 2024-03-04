import { sendEmail } from "@/utils/sendgrid";
import { NextApiResponse } from "next";

export async function POST(req: Request, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, state, city, email, phoneNumber, selectedSubjectsTypes, message, captcha } =
      await req.json();

    try {
      // Ping the Google reCAPTCHA verify API to verify the captcha code you received

      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          method: "POST",
        },
      );

      const captchaValidation = await response.json();

      if (captchaValidation.success) {
        const to = process.env.TO_EMAIL || "";
        const from = process.env.FROM_EMAIL || "";
        // If captcha validation succeeds, proceed with sending email
        await sendEmail(
          name,
          state,
          city,
          email,
          phoneNumber,
          selectedSubjectsTypes,
          message,
          to,
          from,
        );

        return new Response(JSON.stringify("Email sent succefully"), {
          status: 200,
          headers: {
            "content-type": "application/json",
          },
        });
      } else {
        // If captcha validation fails, return an error response
        return new Response(JSON.stringify("Unprocessable request, Invalid captcha code"), {
          status: 422,
          headers: {
            "content-type": "application/json",
          },
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      return new Response(JSON.stringify("Error sending email"), {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      });
    }
  } else {
    return new Response(JSON.stringify("Method not allowed"), {
      status: 405,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
