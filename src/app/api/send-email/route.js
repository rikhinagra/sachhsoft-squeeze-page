import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, phone, designation, company, consent } =
      await request.json();

    if (!name || !email || !phone || !designation || !company || !consent) {
      return NextResponse.json(
        { error: "All fields are required and consent must be given" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptionsToTeam = {
      from: `"Sachhsoft Contact Form" <${process.env.GMAIL_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `🚀 New Lead: ${name} from ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
            <h2 style="margin: 0; font-size: 24px;">🎯 New Lead from Website</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">High-quality lead from mailsachhsoft.com</p>
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1e3a8a; margin-top: 0;">👤 Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #1e3a8a; font-weight: 600;">${name}</td>
              </tr>
              <tr style="background: rgba(59, 130, 246, 0.05);">
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr style="background: rgba(59, 130, 246, 0.05);">
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Role:</td>
                <td style="padding: 8px 0; color: #1e3a8a; font-weight: 600; text-transform: uppercase;">${designation}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td>
                <td style="padding: 8px 0; color: #1e3a8a; font-weight: 600;">${company}</td>
              </tr>
            </table>
          </div>

          <div style="background: linear-gradient(135deg, #f59e0b, #f97316); color: white; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h4 style="margin: 0 0 10px 0;">🎯 Next Steps:</h4>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Contact within 24 hours for optimal conversion</li>
              <li>Schedule consultation via Calendly</li>
              <li>Send project planning kit and resources</li>
            </ul>
          </div>

          <div style="text-align: center; padding: 15px; border-top: 1px solid #e0e0e0;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Submitted on ${new Date().toLocaleString("en-US", {
                timeZone: "UTC",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short",
              })}
            </p>
            <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 12px;">
              From: <strong>mailsachhsoft.com</strong> • Lead Generation Form
            </p>
          </div>
        </div>
      `,
    };

    const mailOptionsToUser = {
      from: `"Sachhsoft Team" <${process.env.GMAIL_EMAIL}>`,
      to: email,
      subject: `Thank you for your interest, ${name}! 🚀`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%); color: white; padding: 25px; border-radius: 8px; text-align: center; margin-bottom: 25px;">
            <h1 style="margin: 0; font-size: 28px;">Welcome to Sachhsoft! 🎉</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Your journey to digital transformation starts here</p>
          </div>

          <div style="padding: 0 10px;">
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">Hi <strong style="color: #1e3a8a;">${name}</strong>,</p>

            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              Thank you for reaching out to us from <strong>${company}</strong>! We're excited to learn more about your project and help you achieve your digital goals.
            </p>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #3b82f6;">
              <h3 style="color: #1e3a8a; margin-top: 0;">🎯 What happens next?</h3>
              <ul style="color: #374151; line-height: 1.8; margin: 0; padding-left: 20px;">
                <li><strong>Within 24 hours:</strong> Our team will contact you to schedule a consultation</li>
                <li><strong>Free Resources:</strong> We'll send you our project planning kit and industry insights</li>
                <li><strong>Personalized Strategy:</strong> Discuss your specific needs and goals</li>
                <li><strong>Custom Proposal:</strong> Receive a tailored solution for your business</li>
              </ul>
            </div>

            <div style="background: linear-gradient(135deg, #f59e0b, #f97316); color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
              <h3 style="margin: 0 0 15px 0;">🚀 Ready to get started sooner?</h3>
              <p style="margin: 0 0 15px 0; opacity: 0.95;">Book a call directly with our team:</p>
              <a href="https://calendly.com/rikhi-sachhsoft/30min?month=2025-06"
                 style="display: inline-block; background: white; color: #f97316; padding: 12px 25px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 16px;">
                Schedule Your Call →
              </a>
            </div>

            <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <h4 style="color: #1e3a8a; margin-top: 0;">📞 Your Information</h4>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Phone:</strong> ${phone}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Role:</strong> ${designation}</p>
            </div>

            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              We're looking forward to partnering with you and turning your vision into reality!
            </p>

            <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 30px;">
              Best regards,<br>
              <strong style="color: #1e3a8a;">The Sachhsoft Team</strong>
            </p>
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center; margin-top: 25px;">
            <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">
              <strong>Sachhsoft</strong> - Transforming Ideas into Digital Solutions
            </p>
            <p style="margin: 0; color: #6b7280; font-size: 12px;">
              🌐 <a href="https://sachhsoft.com" style="color: #3b82f6;">sachhsoft.com</a> |
              📧 <a href="mailto:info@sachhsoft.com" style="color: #3b82f6;">info@sachhsoft.com</a>
            </p>
          </div>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(mailOptionsToTeam),
      transporter.sendMail(mailOptionsToUser),
    ]);

    return NextResponse.json(
      {
        message: "Emails sent successfully!",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Internal server error",
      },
      { status: 500 }
    );
  }
}
