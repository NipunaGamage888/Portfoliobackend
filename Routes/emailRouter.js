const express = require("express");
const nodemailer = require("nodemailer");
const Routes = express.Router();

Routes.post("/sendemail", async (req, res) => {
    const { name, email, subject, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host:'smtp.gmail.com',
      auth: {
        user: 'nipunagamage888@gmail.com', 
        pass: 'rwnl npme qbxi bjal ', 
      },
    });
  
    let mailOptions = {
      from: "nipunagamage888@gmail.com",
      to: "nipunagamage888@gmail.com",
      subject: "New Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message:${message}
      `
    };
  
    
    try {
      await transporter.sendMail(mailOptions);
      res.sendStatus(200);
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Failed to send email");
    }
  });
  
  module.exports=Routes
  
  