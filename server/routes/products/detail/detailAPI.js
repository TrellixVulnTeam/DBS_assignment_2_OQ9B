const { Router } = require("express");
const router = Router();
const connection = require("../../db_config");

const similarProductsRoute = require("./similarProducts/similarProductsAPI");
const trendingProductsRoute = require("./trendingProducts/trendingProductsAPI");

router.use("/similar", similarProductsRoute);
router.use("/trending", trendingProductsRoute);

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  const id = req.query.id;
  const query = `SELECT * FROM ${connection.db_name}.product WHERE id = ?`;
  try {
    connection.db.query(query, [id], (err, results) => {
      res.status(200).send(results);
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
