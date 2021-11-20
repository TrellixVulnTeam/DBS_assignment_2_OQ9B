const mysql = require("mysql")
require("dotenv").config()

module.exports = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: process.env.DB_NAME
});