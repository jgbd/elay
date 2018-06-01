const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // res.render('index', { title: 'Express' });
});

router.post('/setPQRS',(req, res)=>{
  console.log("hola"+ JSON.stringify(req.body.form));
  res.send(true);
})

module.exports = router;
