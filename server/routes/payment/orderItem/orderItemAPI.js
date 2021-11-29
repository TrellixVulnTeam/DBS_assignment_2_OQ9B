const { Router } = require("express");
const express = require("express");

const router = Router();
router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
router.use((req, res, next) => {
  next();
});

const mysql = require("mysql2");

const host_name = "localhost";
const db_name = "dbs";
const db_user = "Hoai_Nam07";
const db_password = "nam07102001";

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
  console.log("orderItem:");
  console.log(req.body.length);
  console.log(req.body[0].props.id);
  console.log(req.body[0].props.amount);
  for(let i = 0; i < req.body.length; i++)
  {
  var query = `INSERT INTO ${db_name}.order_item (orderID,productID,quantity) VALUES ((SELECT MAX(orderID) FROM ${db_name}.order), ${req.body[i].props.id}, ${req.body[i].props.amount});`;
  try {
    console.log(query);
    db.query(query, (err, results) => {
      console.log("Sent order-item");
      res.status(200);
    });
  } catch (err) {
    console.log("ERROR: " + err);
  }
  }
});

router.put("/", async (req, res) => {
  res.send(200);
});

router.delete("/", async (req, res) => {
  res.send(200);
});

module.exports = router;
