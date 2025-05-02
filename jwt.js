const express= require("express");
const bcrypt=require("bcrypt");
const jwt = require('jsonwebtoken');
const cookieParser=require("cookie-parser");
const app=express();

app.use(cookieParser());

app.get('/',(req,res)=>{
   let token=jwt.sign({email:"priyanshu1111@gmail.com"},'secret');  // encrypt 
   res.cookie("token",token);  // send cookie as a token
   res.send("done");
})

app.get('/read',(req,res)=>{
    res.send("hi cookie forward>>");
    let data=jwt.verify(req.cookies.token,'secret');// decrypt the cookie
    console.log(data);
})
app.listen(3000,()=>{
    console.log(`app is listening on the http://localhost:3000`);
})