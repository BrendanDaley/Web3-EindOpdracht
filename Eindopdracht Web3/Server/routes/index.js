const express = require("express");
const expressRouter = express.Router();
const db = require("../config/db");
const cors = require("cors");

const Router = {
//PRODUCTEN
GetAllProducts: 
 expressRouter.get("/products", (req, res) => {
  db.query("Select * from product", (err, results) => {
    const value = results;
    res.json(value);
  });
}),


GetProductById:
expressRouter.get("/productopid", (req, res) => {
  const id = req.body.Id;
  db.query("Select * from product Where Id = (?)", [id], (err, results) => {
    const value = results;
    res.json(value);
  });
}),

PostProduct:
expressRouter.post("/postproduct", (req, res) => {
  const imageId = req.body.imageId;
  const naam = req.body.naam;
  const merk = req.body.merk;
  const prijs = req.body.prijs;
  const beschrijving = req.body.beschrijving;

  db.query(
    "insert into product (imageId,naam,merk,prijs,beschrijving) values (?,?,?,?,?)",
    [imageId, naam, merk, prijs, beschrijving],
    (err, results) => {
      if(err){
        console.log(err)
      }else{res.send("post product succesfull")}
    }
  );
}),

//BESTELLINGEN
GetBestllingen:
expressRouter.get("/bestelling", (req, res) => {
  db.query("Select * from bestelling", (err, results) => {
    const value = results;
    res.json(value);
  });
}),

//get besetlling op ID
GetBestellingById:
expressRouter.get("/besetellingopid", (req, res) => {
  const id = req.body.Id;
  db.query("Select * from product Where Id = (?)", [id], (err, results) => {
    value = results;
    res.json(value);
  });
}),

//POST
PostBestelling:
expressRouter.post("/postbestelling", (req, res) => {
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
}),
}

module.exports = Router;
