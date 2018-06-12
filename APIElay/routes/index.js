const express = require('express');
const router = express.Router();
var Sequelize = require('sequelize');
var sqlCon = require('../config/connectionDb');
var Pqrs = require('../models/pqrsTable').pqrsTable

/* GET home page. */


router.get('/', (req, res) => {
  // res.render('index', { title: 'Express' });
});

router.post('/setPQRS', (req, res) => {
  var sequelize = sqlCon.configConnection();
  // var pqrs = Pqrs.pqrsTable;
  console.log('hola' + JSON.stringify(req.body.json))
  var json = JSON.parse(JSON.stringify(req.body.json))
  console.log('hola 2' + json.phone)
  

  Pqrs
  .build({ email:'hola', phone:'123', pqrs:'hhhhh' })
  .save()
  .then(anotherTask => {
    // you can now access the currently saved task with the variable anotherTask... nice!
  })
  .catch(error => {
    console.log(error);
    
    // Ooops, do some error-handling
  })
})

module.exports = router;

