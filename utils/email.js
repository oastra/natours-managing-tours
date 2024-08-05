const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transporter instance
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Olah Chernysh <admin@gmail.com>',
    to: options.to, // Ensure this matches the key in the function call
    subject: options.subject,
    text: options.message,
  };

  // 3) Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email'); // Rethrow the error to be caught by catchAsync
  }
};

module.exports = sendEmail;
