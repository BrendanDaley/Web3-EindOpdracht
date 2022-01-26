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
    let klant = req.body.klant;
    let datum = new Date();
    const { naam, achterNaam, email } = klant;
    let bestelling = req.body.producten;

    db.query(
      `insert into bestelling (datum, klantNaam, klantAchterNaam, klantEmail) values (?,?,?,?)`,
      [datum, naam, achterNaam, email],
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send("post bestelling succesful");
        }
      }
    );

    db.query(
      `SELECT Id FROM bestelling ORDER BY Id DESC LIMIT 1`,
      [],
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          id = results.insertedId;
        }
      }
    );
    /*
    bestelling.forEach((item) => {
      db.query(
        `insert into product_bestelling (productId, bestellingId, aantal) values (?,?,?)`,
        [item.productId, id, item.aantal],
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            res.send("post product_bestelling succesfull");
          }
        }
      );
    });*/
  }),
};

module.exports = Router;
