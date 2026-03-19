import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, reason, message } = body;

    // Validate required fields
    if (!name || !email || !message || !reason) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    // Here you would integrate an email service such as:
    // - Resend (https://resend.com) — recommended
    // - Nodemailer with SMTP
    // - SendGrid
    //
    // Example with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'site@neuropsychologue-hourrague.fr',
    //   to: 'contact@neuropsychologue-hourrague.fr',
    //   subject: `Nouveau message de ${name} – ${reason}`,
    //   html: `<p>...</p>`,
    // });

    console.log("Contact form submission:", {
      name, email, phone, subject, reason, message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
