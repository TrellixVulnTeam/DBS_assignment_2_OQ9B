const query = require('../common/query');

module.exports = {

    get: (shopID, callback) => {

        console.log(shopID);
        const sql = `SELECT * from product where ownerID = ${shopID}`;
        console.log(sql);
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
        
        query.awaitQuery(sql).then(result => callback(true))
        .catch(error => callback(false));
    },
    update: (data, callback) => {
        const sql = `UPDATE product set amount=${data.amount}, name="${data.name}", 
         description="${data.description}", price=${data.price}, type="${data.type}"
        , imageURL="${data.imageURL}"
         where ownerID=${data.ownerID} and id=${data.id}
         `;
        
        query.awaitQuery(sql).then(result => {
            if (result.affectedRows > 0) {

                console.log(sql);
                callback({isSuccess: true, message: "Thành công"})
            }
            else {
                callback({isSuccess: false, message: "Thất bại"})
            }
        })
        .catch(error => callback({isSuccess: true, message: "Thất bại"}))
        ;
    }

};