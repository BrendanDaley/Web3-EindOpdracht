const express = require("express");
const expressRouter = express.Router();
const db = require("../config/db");

const Router = {
  //PRODUCTEN
  GetAllProducts: expressRouter.get("/products", (req, res) => {
    db.query("Select * from product", (err, results) => {
      const value = results;
      console.log(results);
      res.json(value);
    });
  }),

  GetProductById: expressRouter.get("/product/:id", (req, res) => {
    db.query(
      `Select * from product Where Id = ?`,
      [req.params.id],
      (err, results) => {
        if (err) {
          res.send(err);
        }
        const value = results;
        res.json(value);
      }
    );
  }),

  //POST Bestelling
  PostBestelling: expressRouter.post("/postbestelling", (req, res) => {
    let id;
    let datum = new Date();
    const { klantNaam, klantAchterNaam, klantEmail } = req.body;

    db.query(
      `insert into bestelling (datum, klantNaam, klantAchterNaam, klantEmail) values (?,?,?,?)`,
      [datum, klantNaam, klantAchterNaam, klantEmail],
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send("post bestelling succesful");
          console.log(`Inserted id: ${id}`);
          id = results.insertId;
        }
      }
    );

    // db.query(
    //   `insert into product_bestelling (productId, bestellingId, aantal) values (?,?,?)`,[req.body.productId, lastId, req.body.aantal],
    //   (err, results) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       res.send("post product_bestelling succesfull");
    //     }
    //   }
    // );
  }),
};

module.exports = Router;
