const express = require('express');
var user = require('../model/user');

const router = express();

router.post('/createuser', (req, res) => {
  let users = {
    name: 'Maleficint',
    age: 3000,
    gender: 'female'
  }
  user.create(users)
      .then( userdata => {
        res.send(userdata)
      });
});

router.get('/test', (req,res)=>{
  res.send('TEST')
});

module.exports = router;