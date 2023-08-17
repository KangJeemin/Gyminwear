export {};
const mysql = require("mysql2/promise"); // Use the promise version of mysql2
const pool = mysql.createPool({
    user: process.env.NEXT_PUBLIC_DATABASE_USER,
    password: process.env.NEXT_PUBLIC_DATABASE_PASSWARD, // Fix typo here
    host: 'localhost',
    port: process.env.NEXT_PUBLIC_DATABASE_PORT,
    database: process.env.NEXT_PUBLIC_DATABASE_DATABASE,
    connectionLimit: 10, // Adjust this value based on your needs
});

module.exports = pool;
