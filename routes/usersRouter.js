const express = require('express');
const router = express.Router();
let userModel = require('../models/usermodel')

router.get('/',(req, res)=>{
  res.send("hey it's working");
})

router.post('/register',async function(req, res){
  try{
    let {email, password, fullname} = req.body;
    let userCreated = await userModel.create({
      email,
      password,
      fullname
    });
    res.send(userCreated)
  } catch(err){
    console.log(err.message)
  }
})

module.exports = router;