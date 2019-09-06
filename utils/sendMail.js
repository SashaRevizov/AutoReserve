const nodemailer = require("nodemailer");
const Car = require('../models/car')
const express = require('express')
const app = express()

async function mail(req,pib,email,startPlace,endPlace,birthsday,phone,dateStart,dateEnd,car){

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "sasha160120@gmail.com", // generated ethereal user
          pass: "4ass55rf" // generated ethereal password
        }
      })
     
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'MyAuto', // sender address
      to: "sasha16012000@gmail.com", // list of receivers
      subject: "Бронювання автомобіля", // Subject line
      text: "Користувач "+ pib + "бажає забронювати автомобіль", // plain text body
      html: "<p>Броньована машина:  " + car.mark + "</p>" +
      "<p>День народження:  " + birthsday+ "</p>"+
      "<p>Email:  " +  email+ "</p>"+
      "<p>Телефон:  " +  phone+ "</p>"+
      "<p>Місце подачі:  " + startPlace +  "   Дата видачі:" + dateStart + "</p>" +
      "<p>Місце повернення:  " + endPlace + "   Дата повернення:" + dateEnd + "</p>"
    })
  

  }



module.exports = mail