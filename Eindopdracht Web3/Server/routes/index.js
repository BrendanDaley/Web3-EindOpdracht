const express = require("express");
const expressRouter = express.Router();
const db = require("../config/db");



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
expressRouter.get("/productop/:id", (req, res) => {
  db.query(`Select * from product Where Id = ${req.params.id}`, (err, results) => {
    if(err){
      res.send(err);
    }
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
expressRouter.get("/besetelling/:id", (req, res) => {
  console.log(req.params.id);
  db.query(`Select * from bestelling Where Id = ${req.params.id}`, (err, results) => {
    if(err){
      res.send(err);
    }
    const value = results;
    res.json(value);
  });
}),

//POST
PostBestelling:
expressRouter.post("/postbestelling", (req, res) => {

  db.query(
    `insert into bestelling (datum, klantNaam, klantAchterNaam, klantEmail) values (${req.body.datum}, ${req.body.naam}, ${req.body.achterNaam}, ${req.body.email})`,
    (err, results) => {
      if(err){
        console.log(err)
      }else{res.send("post bestelling succesfull")}
    }
  );
  
  const lastId = db.query(
      //last inserted id
    )

  db.query(
    `insert into product_bestelling (productId, bestellingId, aantal) values (${req.body.productId}, ${lastId}, ${req.body.aantal},)`,
    (err, results) => {
      if(err){
        console.log(err)
      }else{res.send("post product_bestelling succesfull")}
    }
  );
}),
}

module.exports = Router;
