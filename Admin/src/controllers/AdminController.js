
const mysql = require('mysql2');
const db = require('../config/db/DBconnection');
// const Helper = require('./Helper');
class AdminController{
  index = (req, res)=>{
    let query = "call getRevenue();";
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
        query = "call getCustomer();";
        db.query(query, (err, cus, fields) => {
            if (err) {
                res.status(500).send({
                    message:
                        err.message
                    });
            console.log("error: ", err);
            return;
            }
            cus = cus[0];
            console.log(cus);
            res.render('./admin',{data,cus});
        });
    });
  }
  getOwner = (req, res)=>{
    let query = "call getRevenueOwner();";
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
        query = "call getOwner();";
        db.query(query, (err, total, fields) => {
            if (err) {
                res.status(500).send({
                    message:
                        err.message
                    });
            console.log("error: ", err);
            return;
            }
            total = total[0];
            console.log(total);
            res.render('./adminowner',{data,total});
        });
    });
  }
  getCompany = (req, res)=>{
    if(req.query.company){
        let query = "call SearchCompany('"+req.query.company+"');";
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
            res.render('./company',{data});
        });
    }
    else{
        let query = "call getCompany();";
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
            res.render('./company',{data});
        });
    }
  }
  getCompanydetail = (req, res)=>{
    let query = "call getCompanydetail("+req.query.id+");";
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
        query = "SELECT getdelivery("+req.query.id+")  AS price;";
        db.query(query, (err, price, fields) => {
          if (err) {
              res.status(500).send({
                  message:
                      err.message
                  });
          console.log("error: ", err);
          return;
          }
          res.render('./companydetail',{data,price});
        });

    });
    
  }
  
}

module.exports= new AdminController;
