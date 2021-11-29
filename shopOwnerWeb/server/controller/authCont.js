const auth = require('../model/Auth');

module.exports = (app) => {

    app.post('/auth' , (req , res)=>{
    
        auth.authenticateUser(req.body.account, req.body.password)
        .then(result => 
        {   
            res.send(result);
        }
        )
        .catch(error => res.status(400).send(error))
    })


}