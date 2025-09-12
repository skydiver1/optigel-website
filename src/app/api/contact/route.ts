import { NextRequest, NextResponse } from 'next/server';
import Mailchimp from '@mailchimp/mailchimp_transactional';

export async function POST(request: NextRequest) {
  try {
    const { name, email, order, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Initialize Mandrill
    const mandrill = Mailchimp(process.env.MANDRILL_API_KEY);

    // Email content for notification to info@medicaltechnologyltd.co.uk
    const notificationEmailHtml = `
      <h2>New Contact Form Submission - Opti-15 Gel</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${order ? `<p><strong>Order Number:</strong> ${order}</p>` : ''}
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>This message was sent from the Opti-15 Gel contact form at optigel.co.uk</em></p>
    `;

    // Send notification email to Medical Technology Ltd
    await mandrill.messages.send({
      message: {
        html: notificationEmailHtml,
        subject: `Opti-15 Gel Contact Form: ${subject}`,
        from_email: 'noreply@optigel.co.uk',
        from_name: 'Opti-15 Gel Website',
        to: [
          {
            email: 'info@medicaltechnologyltd.co.uk',
            name: 'Medical Technology Ltd',
            type: 'to'
          }
        ],
        headers: {
          'Reply-To': email
        },
        tags: ['contact-form', 'opti-15-gel'],
        track_opens: true,
        track_clicks: true
      }
    });

    // Send confirmation email to user
    const confirmationEmailHtml = `
      <h2>Thank you for your message!</h2>
      <p>Dear ${name},</p>
      <p>We have received your message and will get back to you within 24 hours.</p>
      <p><strong>Your message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p>Best regards,<br>The Opti-15 Gel Team</p>
      <p>📧 support@optigel.co.uk<br>📞 0800 470 0316</p>
    `;

    await mandrill.messages.send({
      message: {
        html: confirmationEmailHtml,
        subject: 'Thank you for contacting Opti-15 Gel',
        from_email: 'support@optigel.co.uk',
        from_name: 'Opti-15 Gel Support',
        to: [
          {
            email: email,
            name: name,
            type: 'to'
          }
        ],
        tags: ['contact-form-confirmation', 'opti-15-gel'],
        track_opens: true
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}