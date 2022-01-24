const express = require("express");
const app = express();
const db = require("../config/db");
const cors = require("cors");

const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

/*klanten*/
//GET
//geef alle klanten
app.get("/Klant", (req, res) => {
  db.query("Select * from klant", (err, results) => {
    value = results;
    res.json(value);
  });
});

//klant op ID
app.get("/klantopid", (req, res) => {
  const id = req.body.Id;
  db.query("Select * from klant Where Id = (?)", [id], (err, results) => {
    value = results;
    res.json(value);
  });
});

//POST
//registreer klant
app.post(
  "/postklant",
  [check("email").isEmail().normalizeEmail()],
  (req, res) => {
    const naam = req.body.naam;
    const achterNaam = req.body.achterNaam;
    const email = req.body.email;
    const paswoord = req.body.paswoord;

    const errors = validationResult(req);
    bcrypt
      .hash(paswoord, 10)
      .then((hash) =>
        //insert into db
        db.query(
          "insert into klant(naam,achterNaam,email,password) values(?,?,?,?))",
          [naam, achterNaam, email, hash],
          (err, results) => {
            if (err) {
              console.log(err);
            } else {
              res.send("success");
            }
          }
        )
      )
      .catch((err) => res.send(err));

    console.log(errors);
  }
);

//log klant in
app.post(
  "/postklant",
  [check("email").isEmail().normalizeEmail()],
  (req, res) => {
    const email = req.body.email;
    const paswoord = req.body.paswoord;
    const id = req.body.id;
    const errors = validationResult(req);

    bcrypt
      .hash(paswoord, 10)
      .then((hash) =>
        //insert into db
        db.query(
          "select (email, paswoord) from klant where Id = (?)",
          [id],
          (err, results) => {
            if (err) {
              console.log(err);
            } else {
              bcrypt.compare(hash, results.body.paswoord, (err, dbres) =>{
                  if(dbres == true && paswoord == results.body.paswoord){
                    res.send("succesvol ingelogd")
                  }else{res.send("log in mislukt")}
              });
            }
          }
        )
      )
      .catch((err) => res.send(err));

    console.log(errors);
  }
);

/*Producten*/
//GET
//all products
app.get("/products", (req, res) => {
  db.query("Select * from product", (err, results) => {
    value = results;
    res.json(value);
  });
});
//productById
app.get("/productopid", (req, res) => {
  const id = req.body.Id;
  db.query("Select * from product Where Id = (?)", [id], (err, results) => {
    value = results;
    res.json(value);
  });
});

//POST
//voegProductToe
app.post("/postproduct", (req, res) => {
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
});

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


app.listen(3001, () => {
  console.log("Server Running on Port 3001");
});

module.exports = app;
