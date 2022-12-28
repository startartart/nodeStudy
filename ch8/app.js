const express = require('express');
const mysql = require('./mysql');

const app = express();

app.listen(3000, () => console.log('Server is running...'));

app.get('/api/customers', async (req, res) => {
    const rows = await mysql.query('customerList');
    console.log(rows);
    res.json(rows);
});