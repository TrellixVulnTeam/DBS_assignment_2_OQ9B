const bruh = require("mysql2");
// const host_name = "us-cdbr-east-04.cleardb.com";
// const db_name = "heroku_89cd7c1b2904388";
// const db_user = "bbc9d6f776f77a";
// const db_password = "28c9feff";

const host_name = "localhost";
const db_name = "dbs_assignment";
const db_user = "root";
const db_password = "123456";

var db_config = {
  host: host_name,
  database: db_name,
  user: db_user,
  password: db_password,
}

var connection = bruh.createConnection(db_config)

module.exports = {
  host_name: host_name,
  db_name: db_name,
  db_user: db_user,
  db_password: db_password,
  connection: connection
};
