const express = require('express');
const router = express.Router();
const db = require("../config/db");

/* GET users listing. */
router.get("/klant", function (req, res) {
  
});

//get user by id
router.get("/klant/:id", (req, res) => {
  UserController.findUserById(req.params.id);
});

//inloggen


//registreren





module.exports = router;
