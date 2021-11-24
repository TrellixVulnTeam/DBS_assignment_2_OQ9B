const { Router } = require("express");
const express = require("express");

const router = Router();
router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
router.use((req, res, next) => {
  next();
});
const mysql = require("mysql2");

const host_name = "us-cdbr-east-04.cleardb.com";
const db_name = "heroku_6e1565a3fdbcd13";
const db_user = "b8df0bb549a639";
const db_password = "1a1822f0";

const db = mysql.createConnection({
  host: host_name,
  user: db_user,
  password: db_password,
  database: db_name,
});

router.get("/", async (req, res) => {
  res.send(200);
});

router.post("/", async (req, res) => {
  console.log("order:");
  console.log(req.body);
  var dia_chi = `${req.body.Duong}, ${req.body.Phuong}, ${req.body.Quan}, ${req.body.Tinh}`;
  console.log(dia_chi);
  var query = `INSERT INTO ${db_name}.order (customerName,customerPhone,customerEmail,customerAddress,detail,paymentMethod,status) 
  VALUES ("${req.body.HoTen}","${req.body.SDT}","${req.body.Email}","${dia_chi}","${req.body.GhiChu}", "Tiền mặt", "Đã nhận");`;
  try {
    console.log(query);
    db.query(query, (err, results) => {
      console.log("send order");
    });
  } catch (err) {
    console.log("ERROR: " + err);
  }
  res.end();
});

router.put("/", async (req, res) => {
  res.send(200);
});

router.delete("/", async (req, res) => {
  res.send(200);
});

module.exports = router;
