const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const dotenv = require('dotenv');
const path = require('path');

// dotenv.config();
// EMAIL //
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.post('/api/form', (req, res) => {
//     nodemailer.createTestAccount((err, account) => {
//         const htmlEmail = `
//         <h3>Contact Details</h3>
//         <ul>
//           <li>Name: ${req.body.name}</li>
//           <li>Email: ${req.body.email}</li>
//         </ul>
//         <h3>Message</h3>
//         <p>${req.body.message}</p>
//         `

        
//         let transporter = nodemailer.createTransport({
//             service: 'gmail',
//             secure: false,
//             port: 25,
//             auth: {
//                 user: process.env.EMAIL,
//                 pass: process.env.PASS
//             },
//             tls:{
//                 rejectUnauthorized: false
//             }
//         })


       

//         let helperOptions = {
//             from: '"my name" <myemail@gmail.com',
//             to: 'myemailc@gmail.com',
//             subject: 'Christine Photography Website Inquiery',
//             text: req.body.message,
//             html: htmlEmail
//         }

//         transporter.sendMail(helperOptions, (err, info) => {
//             if (err) {
//                 return console.log(err)
//             }
//             console.log('Message Sent: %s', info.message)
//             console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
//         })

//     })
// })
// EMAIL ^

const PORT = process.env.PORT || 3001
// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
  }

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})