var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var fname = req.body.fname
  var lname = req.body.lname
  var number = req.body.number
  var email = req.body.email
  var message = req.body.message
  var content = `Name: ${fname} ${lname} \nEmail: ${email} \nMessage: ${message} `

  var mail = {
    from: lname + ' ' + fname,
    to: 'joshuaeup@gmail.com',  //Change to email address that you want to receive messages on
    subject: `ValWeb New Message from from: ${fname} ${lname}`,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
