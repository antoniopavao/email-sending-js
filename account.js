// Npm Module
const sgMail = require("@sendgrid/mail");

// API KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Sending welcome email
const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "youremailhere@youremail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

// Sending cancelation email
const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "youremailhere@youremail.com",
    subject: "We are sorry to see you go!",
    text: `Hi ${name}, Thanks for using Tasky. We are just confirming that you deleted your account. You have 30 days to have it back in case in change your mind. Could you help us improve our service telling us why you decided to leave? Thank you, Tasky `,
  });
};

// Exporting functions
module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
