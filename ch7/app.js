const express = require('express')
const customerRoute = require('./routes/customer')
const productRoute = require('./routes/product')
const app = express()
const port = 3000

app.use(express.json({
    limit: '50mb'
})) // 클라이언트 요청 body를 json으로 파싱처리

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.use('/customer', customerRoute)
app.use('/product', productRoute)
