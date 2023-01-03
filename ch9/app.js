const express = require('express');
require('dotenv').config({ path: '.env' });

const nodemailer = require('./send_email');
const nodemailerMailtrap = require('./send_email_mailtrap');

const app = express();

app.use(express.json({
    limit: '50mb'
}));

app.listen(3000, () => console.log('Server is running...'));

app.post('/api/send', async (req, res) => {
    const result = await nodemailer.send(req.body.param);
    res.send(result);
    console.log(result);
});

app.post('/api/send2', async (req, res) => {
    const result = await nodemailerMailtrap.sendInbox(req.body.param);
    res.send(result);
    console.log(result);
});