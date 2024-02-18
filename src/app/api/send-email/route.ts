import { sendEmail } from "@/utils/sendgrid";
import { NextApiResponse } from "next";

export async function POST(req: Request, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, state, city, email, phoneNumber, selectedSubjectsTypes, message } =
      await req.json();

    try {
      await sendEmail(name, state, city, email, phoneNumber, selectedSubjectsTypes, message);
      return new Response(JSON.stringify("Email sent successfully"), {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      });
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
