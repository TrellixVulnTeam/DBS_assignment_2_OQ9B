const product = require('../model/Product');

module.exports = (app) => {

    app.get('/product' , (req , res)=>{
    
       product.get(result => {

            res.send(result.data);
       })
    
    });

    app.post('/add-product' , (req , res)=>{
        
        console.log(req.body);
        const data = {
            ownerID: req.body.ownerID,
            amount: req.body.amount,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            type: req.body.type,
            imageURL: req.body.imageURL
        }
        product.add(data, result => res.send(result));
    })



}