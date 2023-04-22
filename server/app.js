const express = require("express");
const cors = require("cors");
const app = express();
const proposalRouter = require("./routes/proposalRouter");
const { singleuser } = require("./controller/singleUser");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/proposal", proposalRouter);
app.use("/",singleuser)

module.exports = app;
