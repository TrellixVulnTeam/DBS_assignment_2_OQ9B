const query = require('../common/query');

module.exports = {

    get: (shopID, callback) => {

        
        const sql = `SELECT * from product where ownerID = ${shopID}`;
        
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
        .catch(error => callback({isSuccess: false, message: "Thất bại"}))
        ;
    },
    deleteProduct: (data, callback) => {

        const sql = `DELETE FROM PRODUCT WHERE id=${data.id} and ownerID=${data.ownerID}`;

        query.awaitQuery(sql).then(result => {
            if (result.affectedRows > 0) {

                console.log(sql);
                callback({isSuccess: true, message: "Thành công"})
            }
            else {
                callback({isSuccess: false, message: "Thất bại"})
            }
        })
        .catch(error => callback({isSuccess: false, message: "Thất bại"}))
        ;
        
    },

    getAllOrderOfProduct: (data, callback) => {

        const sql = `CALL get_all_order_of_product(${data.ownerID}, ${data.id})`;
        query.awaitQuery(sql).then(
            result => {                
                callback({isSuccess: true, data: result[0]});
            }
        )
        .catch(error => {
            callback({isSuccess: false, data: error});
        })
    },
    getProductCountByType: (shopID, callback) => {

        const sql = `SELECT type, SUM(amount) AS total FROM product WHERE ownerID = ${shopID} GROUP BY product.type ORDER BY total DESC`;
        query.awaitQuery(sql).then(
            result => {                
                callback({isSuccess: true, data: result[0]});
            }
        )
        .catch(error => {
            callback({isSuccess: false, data: error});
        })
    }
};