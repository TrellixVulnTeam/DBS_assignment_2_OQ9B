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
  console.log("orderItem:");
  console.log(req.body.length);
  console.log(req.body[0].props.id);
  console.log(req.body[0].props.amount);
  for (let i = 0; i < req.body.length; i++) {
    var query = `INSERT INTO ${connection.db_name}.order_item (orderID,productID,quantity) VALUES ((SELECT MAX(orderID) FROM ${connection.db_name}.order), ${req.body[i].props.id}, ${req.body[i].props.amount});`;
    try {
      console.log(query);
      connection.connection.query(query, (err, results) => {
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
