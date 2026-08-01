const DEFAULT_TO_EMAIL = "hello@example.com";

export async function sendContactEmail({ name, email, phone, message }) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;

  const subject = `New project inquiry from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  if (!apiKey) {
    // No email provider configured yet — log so local dev / previews still work.
    console.log("[contact form] RESEND_API_KEY not set. Message received:", {
      name,
      email,
      phone,
      message,
    });
    return { delivered: false, logged: true };
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
    to: toEmail,
    replyTo: email,
    subject,
    text,
  });

  if (error) {
    throw new Error(error.message || "Email provider rejected the message.");
  }

  return { delivered: true };
}
