const mysql = require("mysql2");

const host_name = "us-cdbr-east-04.cleardb.com";
const db_name = "heroku_d9e1dcc33e5346d";
const db_user = "b4775c762aff31";
const db_password = "19f9ba66";

// const host_name = "localhost";
// const db_name = "db_bkis";
// const db_user = "root";
// const db_password = "123456";

module.exports = {
  host_name: host_name,
  db_name: db_name,
  db_user: db_user,
  db_password: db_password,
  db: mysql.createConnection({
    host: host_name,
    user: db_user,
    password: db_password,
    database: db_name,
  }),
};
