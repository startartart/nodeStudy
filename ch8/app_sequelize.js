const express = require('express');
const sequelize = require('./models').sequelize;
const app = express();

sequelize.sync();

const {customers} = require('./models');

app.use(express.json({
    limit: '50mb'
}));

app.listen(3000, () => console.log('Server is running...'));

app.get('/api/customers', async (req, res) => {
    const customersData = await customers.findAll();
    console.log(customersData);
    res.send(customersData);
});

app.post('/api/customer/insert', async (req, res) => {
    const {name, email, phone, address} = req.body.param;
    const result = await customers.create({
        name:name,
        email:email,
        phone:phone,
        address:address
    });
    res.send(result);
});

app.put('/api/customer/update', async (req, res) => {
    const result = await customers.update(req.body.param[0], {
        where: {id: req.body.param[1]}
    });
    res.send(result);
});

app.delete('/api/customer/delete/:id', async (req, res) => {
    const {id} = req.params;
    const result = await customers.destroy({
        where: {id:id}
    });
    res.send(result);
});