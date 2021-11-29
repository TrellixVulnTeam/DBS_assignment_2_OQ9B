const { Router } = require("express");
const router = Router();
const connection = require("../db_config");

router.use((req, res, next) => {
    next();
});

router.get("/", async (req, res) => {
    res.send(200);
});

router.post('/', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        connection.connection.query('SELECT shopuser.id FROM `shopuser` WHERE `account` = ? AND `password` = ?', [username, password], function (error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.status(200).send(results);
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    };
});

router.put("/", async (req, res) => {
    res.send(200);
});

router.delete("/", async (req, res) => {
    res.send(200);
});

module.exports = router;