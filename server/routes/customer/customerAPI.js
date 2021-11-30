const { Router } = require("express");
const router = Router();
const connection = require("../db_config");

router.use((req, res, next) => {
    next();
});

router.get("/", async (req, res) => {
    const id = req.query.id;
    const query = `SELECT ${connection.db_name}.shopuser.firstname, ${connection.db_name}.shopuser.lastname, ${connection.db_name}.shopuser.email, ${connection.db_name}.customertype.typename
                    FROM ${connection.db_name}.shopuser
                    JOIN ${connection.db_name}.customer ON ${connection.db_name}.shopuser.id = ${connection.db_name}.customer.id
                    JOIN ${connection.db_name}.customertype ON ${connection.db_name}.customer.cusTypeID = ${connection.db_name}.customertype.typeID
                    WHERE ${connection.db_name}.shopuser.id = ?;`;
    try {
        connection.connection.query(query, [id], (err, results) => {
            res.status(200).send(results);
        });
    } catch (err) {
        console.log("ERROR: " + err);
        res.send("FAILED");
    }
});

router.get("/orders", async (req, res) => {
    const id = req.query.id;
    const query = `SELECT ${connection.db_name}.product.name, ${connection.db_name}.product.imageURL, ${connection.db_name}.order.totalPrice, ${connection.db_name}.order.status, ${connection.db_name}.order.transID, ${connection.db_name}.order.orderID, ${connection.db_name}.product.id
                    FROM ${connection.db_name}.customer
                    JOIN ${connection.db_name}.transaction ON ${connection.db_name}.customer.id = ${connection.db_name}.transaction.customerId
                    JOIN ${connection.db_name}.order ON ${connection.db_name}.order.transID = ${connection.db_name}.transaction.transId
                    JOIN ${connection.db_name}.product ON ${connection.db_name}.product.id = ${connection.db_name}.order.productID
                    WHERE ${connection.db_name}.customer.id = ? ORDER BY ${connection.db_name}.order.orderID`;
    try {
        connection.connection.query(query, [id], (err, results) => {
            res.status(200).send(results);
        });
    } catch (err) {
        console.log("ERROR: " + err);
        res.send("FAILED");
    }
});

router.get("/cancel_orders", async (req, res) => {
    const transId = req.query.transId;
    const orderId = req.query.orderId;
    const query = `CALL ${connection.db_name}.CancelCustomerOrder(?, ?)`;
    try {
        connection.connection.query(query, [transId, orderId], (err, results) => {
            res.status(200).send(results);
        });
    } catch (err) {
        console.log("ERROR: " + err);
        res.send("FAILED");
    }
});

router.get("/total_spent", async (req, res) => {
    const id = req.query.id;
    console.log(id);
    const query = `SELECT CustomerTotalSpent(?) AS total`;
    try {
        connection.connection.query(query, [id], (err, results) => {
            res.status(200).send(results);
        });
    } catch (err) {
        console.log("ERROR: " + err);
        res.send("FAILED");
    }
});

router.post('/', function (req, res) {
    res.send(200);
});

router.put("/", async (req, res) => {
    res.send(200);
});

router.delete("/", async (req, res) => {
    res.send(200);
});

module.exports = router;