import mysql from 'mysql2';
  
const host = process.env.HOST
const user = process.env.USER
const userPassword = process.env.DB_PASSWORD
const database = process.env.BASE

const db = mysql.createConnection({
  host: host,
  user: user,
  password: userPassword,
  database: database

});

db.connect();

export default db;