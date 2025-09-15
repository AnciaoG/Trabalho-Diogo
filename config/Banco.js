const mysql = require('mysql2/promise');

const DB_NAME = 'publica_lojas';

async function initializeDatabase() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Andrade04@biel'
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
  await connection.end();

  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Andrade04@biel',
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  return pool;
}

module.exports = initializeDatabase;
