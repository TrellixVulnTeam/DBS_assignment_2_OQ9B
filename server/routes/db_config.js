const mysql = require('mysql2');

const host_name = "localhost";
const db_name = "dbs_assignment";
const db_user = "root";
const db_password = "123456";

var connection = mysql.createConnection({
  host: host_name,
  database: db_name,
  user: db_user,
  password: db_password,
  waitForConnections: true,
  connectTimeout: 3000000
});

connection.connect((err) => {
  if (err) { throw (err) };
  console.log("connected");
})

module.exports = {
  host_name: host_name,
  db_name: db_name,
  db_user: db_user,
  db_password: db_password,
  connection: connection
};
