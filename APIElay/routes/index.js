const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // res.render('index', { title: 'Express' });
});

router.post('/setPQRS',(req, res)=>{
  console.log(JSON.stringify(req.body.json));
  res.send(true);
})

module.exports = router;
