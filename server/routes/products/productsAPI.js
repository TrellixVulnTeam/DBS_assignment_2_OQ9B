const { Router } = require("express");
const router = Router();
const connection = require("../db_config");
const feedbackRoute = require("./feedback/feedbackAPI");
const detailRoute = require("./detail/detailAPI");

router.use("/feedback", feedbackRoute);
router.use("/detail", detailRoute);

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  try {
    connection.connection.query(
      `SELECT * FROM ${connection.db_name}.product;`,
      (err, results, fields) => {
        // results contains rows returned by server
        // fields contains extra meta data about results, if available
        const products = results;
        res.status(200).send(products);
      }
    );
  } catch (err) {
    console.log("ERROR: " + err);
    res.send("FAILED");
  }
});

router.get("/filter", async (req, res) => {
  const upperPrice = req.query.upperPrice;
  const lowerPrice = req.query.lowerPrice;
  const shopID = req.query.shopID;
  console.log(shopID);
  const query = `CALL ${connection.db_name}.SelectProductsOverPrice(?,?,?)`;
  try {
    connection.connection.query(query, [upperPrice, lowerPrice, shopID], (err, results) => {
      res.status(200).send(results[0]);
    });
  } catch (err) {
    console.log("ERROR: " + err);
    res.send("FAILED");
  }
});

router.post("/", async (req, res) => {
  res.send(200);
});

router.put("/", async (req, res) => {
  res.send(200);
});

router.delete("/", async (req, res) => {
  res.send(200);
});

module.exports = router;
