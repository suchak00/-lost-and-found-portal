const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendMatchEmail(toEmail, itemName, confidence) {
  try {
    await transporter.sendMail({
      from: `"Lost & Found Portal" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: `Possible match found for your lost item: ${itemName}`,
      html: `
        <h2>Good news!</h2>
        <p>We found a possible match for your lost item <b>${itemName}</b>.</p>
        <p>Match confidence: <b>${confidence}</b></p>
        <p>Log in to your account to review and confirm the match.</p>
      `,
    });
    console.log(`Email sent to ${toEmail}`);
  } catch (err) {
    console.error('Email send error:', err.message);
  }
}

module.exports = { sendMatchEmail };