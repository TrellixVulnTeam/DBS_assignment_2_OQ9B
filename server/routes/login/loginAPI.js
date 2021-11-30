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
        const query = 'SELECT shopuser.id, customer.cancelTimes FROM `shopuser` JOIN `customer` ON `customer`.id = `shopuser`.id WHERE `account` = ? AND `password` = ?;';
        connection.connection.query(query, [username, password], function (error, results, fields) {
            if (results.length > 0) {
                if (results[0].cancelTimes >= 5) {
                    response.send('Your account has been locked');
                    console.log('Your account has been locked');
                    return;
                }
                response.status(200).send(results);
            } else if (results.length === 0) {
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