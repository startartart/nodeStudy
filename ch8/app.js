const express = require('express');
require('dotenv').config({ path: './mysql/.env' });
const mysql = require('./mysql');

const app = express();

app.use(express.json({
    limit: '50mb'
}));

app.listen(3000, () => console.log('Server is running...'));

app.get('/api/customers', async (req, res) => {
    const customers = await mysql.query('customerList');

    console.log(customers);
    res.send(customers);
});

app.post('/api/customer/insert', async (req, res) => {
    console.log(req.body);
    const result = await mysql.query('customerInsert', req.body.param);
    res.send(result);
})