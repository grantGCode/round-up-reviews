import mysql from 'mysql2';
  
const userPassword = process.env.DB_PASSWORD

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: userPassword,
  database: 'review_round_up_db'

});

db.connect();

export default db;