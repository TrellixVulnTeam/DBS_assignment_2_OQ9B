const { Router } = require("express");
const express = require("express");
const connection = require("../../db_config");

const router = Router();
router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
router.use((req, res, next) => {
  next();
});
router.get("/", async (req, res) => {
  res.send(200);
});

router.post("/", async (req, res) => {
  console.log("order:");
  console.log(req.body);
  var dia_chi = `${req.body.Duong}, ${req.body.Phuong}, ${req.body.Quan}, ${req.body.Tinh}`;
  console.log(dia_chi);
  var query = `INSERT INTO ${connection.db_name}.order (customerName,customerPhone,customerEmail,customerAddress,detail,paymentMethod,status) 
  VALUES ("${req.body.HoTen}","${req.body.SDT}","${req.body.Email}","${dia_chi}","${req.body.GhiChu}", "Tiền mặt", "Đã nhận");`;
  try {
    console.log(query);
    connection.connection.query(query, (err, results) => {
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
