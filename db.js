require('dotenv').config();
const { Pool } = require('pg');
const { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
    allowExitOnIdle: true
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

module.exports = pool;