const express = require("express");
const cors = require("cors");
const app = express();
const register=require('./routes/register')
const login=require('./routes/login')
app.use(express.json());
app.use(cors());
app.use('/',register)
app.use('/',login)
app.get("/",(req,res)=>{
    res.send("jiiii")
})
module.exports = app;
