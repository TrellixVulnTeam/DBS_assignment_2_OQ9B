const query = require('../common/query');

module.exports = {

    authenticateUser: (account, password, callback) => {

        
        
        return new Promise((resolve, reject) => {

            const sql = `SELECT * from shopuser join shopowner where account="${account}" and password="${password}"`;
            query.awaitQuery(sql).then(result => {

                if (result.length > 0)
                {
                    resolve({isSuccess: true, data: result[0]});
                }
                else {
                    resolve({isSuccess: false, message: "Invalid username or password"})
                }
            })
            .then(error => {
    
                reject({isSuccess: false});
            })

        })
        
    } 

};