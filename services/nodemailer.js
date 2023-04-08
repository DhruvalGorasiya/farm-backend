const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "Gmail",
  auth: {
    user: "freelancer9535@gmail.com",
    pass: "tesjiebpstxqfxyp",
  },
});

module.exports = { transporter };
