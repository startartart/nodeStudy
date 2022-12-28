const mysql = require('mysql');
const sql = require('./sql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    port: 3306,
    user: 'dev01',
    password: '0000',
    database: 'dev'
});

const query = async (alias, params) => {
    return new Promise((resolve, reject) =>  pool.query(sql[alias], params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
    }));
};

module.exports = {
    query
};