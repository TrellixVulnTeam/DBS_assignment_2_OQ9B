const connector = require('./DatabaseConnector');


module.exports = {

    awaitQuery: sql =>
    {
        return new Promise((resolve, reject) => {

            connector.query(sql, (error, result)=>{

                
                
                if (error){
                    return reject(error);
                }
                
                return resolve(result);
            }
            )
        })
    },
    getConnection: () => {
        return new Promise((resolve, reject) => {

            connector.getConnection((err, conn) => {

                if (err)
                    reject(err);
                else {
                    resolve(conn);
                }
            })
        })
    },
    transQuery: (conn, sql) => { // transaction management

        return new Promise((resolve, reject) => {
            
            conn.query(sql, (err, result) => {
                
                if (err)
                    reject(err);
                else {
                    resolve(result);
                }
            })
        })
    }
}