const express = require("express");
const app = express();
const db = require("../config/db");
const cors = require("cors");


/*bestellingen */
//GET
//get all bestellingen
app.get("/bestelling", (req, res) => {
    db.query("Select * from bestelling", (err, results) => {
      value = results;
      res.json(value);
    });
  });
  
  //get besetlling op ID
  app.get("/besetellingopid", (req, res) => {
    const id = req.body.Id;
    db.query("Select * from product Where Id = (?)", [id], (err, results) => {
      value = results;
      res.json(value);
    });
  });
  
  //POST
  app.post("/postbestelling", (req, res) => {
    const productId = req.body.productId;
    const besetllingId = req.body.besetllingId;
    const aantal = req.body.aantal;
    const datum = req.body.datum;
    const klantId = req.body.klantId;
  
    db.query(
      "insert into product (datum, klantId) values (?,?)",
      [datum,klantId],
      (err, results) => {
        if(err){
          console.log(err)
        }else{res.send("post bestelling succesfull")}
      }
    );
    db.query(
      "insert into product_bestelling (productId, bestellingId, aantal) values (?,?,?)",
      [productId,besetllingId,aantal],
      (err, results) => {
        if(err){
          console.log(err)
        }else{res.send("post product_bestelling succesfull")}
      }
    );
  });
  

  
