import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const {name, email, subject, message} = req.body;

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'e8715420@gmail.com',
      subject: `New Contact Form Submission - ${subject || 'No Subject'}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({message: 'Email sent successfully'});
    } catch (error) {
      console.error(error);
      res.status(500).json({message: 'Failed to send email'});
    }
  } else {
    res.status(405).json({message: 'Method Not Allowed'});
  }
}
