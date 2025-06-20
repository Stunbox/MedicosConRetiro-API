require('dotenv').config()

import { Resend } from 'resend';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import emailTemplate from '../templates/emailTemplate';
import emailUserMessage from '../templates/emailUserMessage';
import emailDataContact from '../templates/emailContactData';

const resend = new Resend('re_NPwxqQpj_29Srkb7P7on2wf2r1HqnvD4T');
const app = express();
const cors = require('cors');

app.use(cors()); 
app.use(bodyParser.json());

let corsOptions = {
  origin: [ 'http://localhost:4321/']
};

//index
app.get('/',async (req:Request,res:Response) => {
  res.status(200).json({message: "Bienvenido !"});
});
//test
app.get('/test',async (req:Request,res:Response) => {
  res.json({requestBody: req.body});
});
//Send email
app.post('/send',cors(corsOptions), async (req: Request, res: Response) => {

  var baseTemplate= emailTemplate
    
  var templateUser = baseTemplate
    .replace("{dataAdmin}","")
    .replace("{userData}",emailUserMessage)
    .replace("{username}",req.body.name);

  var templateAdmin = baseTemplate
    .replace("{dataAdmin}",emailDataContact)
    .replace("{userData}",emailUserMessage)
    .replace("{username}",req.body.name)
    .replace("{phone}",req.body.phone)
    .replace("{email}",req.body.email)
    .replace("{email2}",req.body.email)
    .replace("{message}",req.body.message);
  try {

    //Mensaje a admin
    const data = await resend.emails.send({
      from: 'noreply@medicosconretiro.com.mx',
      to: ['ventas@sinergiaeneventos.com','eduardo@medicosconretiro.com.mx'],
      subject: req.body.name +" solicito informacion",
      html: templateAdmin,
    });
    //Mensaje a usuario
    const dataClient = await resend.emails.send({
      from: 'noreply@medicosconretiro.com.mx',
      to: [req.body.email],
      subject: "Gracias por comunicarte con el club",
      html: templateUser,
    });

    res.status(200).json({"status":200,"data":{"idMessageToAgent": data, "idMessageToUser":dataClient}});
  } catch(error) {
    res.status(400).json({"status":400,"data":error});
  }
});

app.listen(3000, () => {
  /*if (!process.env.RESEND_API_KEY) {
    throw `Abort: You need to define RESEND_API_KEY in the .env file.`;
  }*/
  
  console.log('Listening on http://localhost:3000');
});

module.exports = app;
