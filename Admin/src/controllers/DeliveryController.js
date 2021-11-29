
const mysql = require('mysql2');
const db = require('../config/db/DBconnection');
// const Helper = require('./Helper');
class DeliveryController{
  index = (req, res)=>{
    let query = "call GetOrderbyCompany("+ req.query.id+");";
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
        var lay="delivery";
        res.render('./delivery',{data,lay});
    });
    
  }
  accept = (req,res) =>{
    let query = "INSERT INTO `deliver` values("+req.query.IDCompany+", "+req.query.IDtrans+", "+req.query.IDOrder+", NOW(), null)";
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
  cancel = (req,res) =>{
    let query = "DELETE FROM `deliver` WHERE `dTransactionId` = "+req.query.IDtrans+" and `dOrderId`="+req.query.IDOrder+";";
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
  success = (req,res) =>{
    let query = "UPDATE `deliver` SET `endDate` = NOW() where `dTransactionId` = "+req.query.IDtrans+" and `dOrderId` = "+req.query.IDOrder+";";
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
}

module.exports= new DeliveryController;
