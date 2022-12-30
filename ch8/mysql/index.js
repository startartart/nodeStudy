const mysql = require('mysql');
const sql = require('./sql');

const pool = mysql.createPool({
    connectionLimit: process.env.MYSQL_LIMIT,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

const query = async (alias, params) => {
    return new Promise((resolve, reject) =>  pool.query(sql[alias], params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
    }));
};

module.exports = { query };