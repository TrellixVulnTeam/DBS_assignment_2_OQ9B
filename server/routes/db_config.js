const mysql = require("mysql2");
const host_name = "us-cdbr-east-04.cleardb.com";
const db_name = "heroku_d9e1dcc33e5346d";
const db_user = "b4775c762aff31";
const db_password = "19f9ba66";

// const host_name = "localhost";
// const db_name = "dbs_assignment";
// const db_user = "root";
// const db_password = "123456";

var db_config = {
  host: host_name,
  database: db_name,
  user: db_user,
  password: db_password,
}

var connection;
function handleDisconnect() {
  connection = mysql.createConnection(db_config);

  connection.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 500);
    } else {
      console.log("connection is successfull");
    }
  });
  connection.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

module.exports = {
  host_name: host_name,
  db_name: db_name,
  db_user: db_user,
  db_password: db_password,
  connection: connection
};
