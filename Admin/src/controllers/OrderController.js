
const mysql = require('mysql2');
const db = require('../config/db/DBconnection');
// const Helper = require('./Helper');
class OrderController{
  index = (req, res)=>{
    let id= req.query.id;
    let query = "call getOrderbyid("+id +");";
    db.query(query, (err, data, fields) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message
                });
        console.log("error: ", err);
        return;
        }
        data = data[0];
        console.log(data);
        res.render('user/order',{data,id});
    });
  }
  total = (req, res)=>{
    let query = "select purchase_in_month("+ req.query.id+") AS total;";
    db.query(query, (err, data, fields) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message
                });
        console.log("error: ", err);
        return;
        }
        data = data[0];
        console.log(data);
        res.send(data);
    });
  }
  cancelproduct = (req,res)=>{
    let query = "call CancelOrder("+req.query.IDtrans+","+req.query.IDOrder+");";
    db.query(query, (err, data, fields) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message
                });
        console.log("error: ", err);
        return;
        }
        res.send("Success");
    });
  }
  detail = (req, res)=>{
    let query = "call getOrderdetail("+ req.query.IDtrans+","+req.query.IDorder+");";
    db.query(query, (err, data, fields) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message
                });
        console.log("error: ", err);
        return;
        }
        data = data[0];
        console.log(data);
        res.render('user/orderdetail',{data});
    });
  }
}

module.exports= new OrderController;
