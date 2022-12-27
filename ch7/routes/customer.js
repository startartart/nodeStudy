const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('customer 라우트 루트');
});

router.post('/insert', (req, res) => {
    res.send('/customer/insert 라우트');
});

router.put('/update', (req, res) => {
    res.send('/customer/update 라우트');
});

router.delete('/delete', (req, res) => {
    res.send('/customer/delete 라우트');
});

module.exports = router;