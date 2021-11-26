const { Router } = require("express");
const router = Router();
const connection = require("../db_config");

router.use((req, res, next) => {
    next();
});

router.get("/", async (req, res) => {
    try {
        connection.connection.query(
            `SELECT * FROM ${connection.db_name}.shopowner;`,
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