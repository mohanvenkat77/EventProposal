const express = require("express");
const cors = require("cors");
const app = express();
const register = require('./routes/register')
const login = require('./routes/login')
const proposalRouter = require("./routes/proposalRouter");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', register)
app.use("/proposal", proposalRouter);

module.exports = app;
