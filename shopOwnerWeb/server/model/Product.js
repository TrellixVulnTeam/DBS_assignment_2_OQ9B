const query = require('../common/query');

module.exports = {

    get: (callback) => {

        const sql = 'SELECT * from product';

        query.awaitQuery(sql)
        .then(
            result => callback({isSuccess:true, data: result})
        )
        .catch(error => 
            callback({isSuccess:false, data: error})
        )

    },
    getByID: (shopID, productID, callback) => {

        const sql = `SELECT * FROM product where ownerID = ${shopID} and id = ${productID}`;
        query.awaitQuery(sql).then(
            result => callback({isSuccess: true, data: result})
        )
        .catch(error => 
            callback({isSuccess:false, data: error})
        )
    }
    ,
    add: (data, callback) => 
    {
        const sql = `INSERT INTO product (ownerID, amount, name, description, price, type, imageURL)  
        VALUES ("${data.ownerID}", "${data.amount}", "${data.name}", 
        "${data.description}", "${data.price}", "${data.type}", "${data.imageURL}")`;
        console.log(sql);
        query.awaitQuery(sql).then(result => callback(true))
        .catch(error => callback(false));
    }

};