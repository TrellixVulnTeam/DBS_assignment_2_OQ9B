const { Router } = require("express");
const connection = require("../../db_config");

const router = Router();

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  const productID = req.query.productID;
  const customerID = req.query.customerID;
  const query = `SELECT * FROM ${connection.db_name}.review AS a 
                  JOIN ${connection.db_name}.customer AS b ON a.customerID = b.id
                  JOIN ${connection.db_name}.shopuser AS c ON b.id = c.id
                  WHERE a.productID = ? AND a.customerID = ?;`

  connection.connection.query(query, [productID, customerID], (err, results) => {
    if (err) {
      console.log(err);
      res.send("FAILED");
    } else {
      res.status(200).send(results);
    }
  }
  );
});

router.post("/", async (req, res) => {
  const ownerID = req.body.ownerID;
  const productID = req.body.productID;
  const customerID = req.body.customerID;
  const content = req.body.content;
  const timeReview = req.body.timeReview;
  const query = `INSERT INTO review (ownerID, productID, customerID, content, timeReview) VALUES (?,?,?,?,?);`;

  connection.connection.query(query, [ownerID, productID, customerID, content, timeReview], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  }
  );
});

router.put("/", async (req, res) => {
  res.send(200);
});

router.delete("/", async (req, res) => {
  const productID = req.query.productID;
  const customerID = req.query.customerID;
  const query = `DELETE FROM ${connection.db_name}.review AS a 
                  WHERE a.productID = ? AND a.customerID = ?;`
  connection.connection.query(query, [productID, customerID], (err, results) => {
    if (err) {
      console.log(err);
      res.send("FAILED");
    } else {
      res.status(200).send(results);
    }
  }
  );
});

module.exports = router;
