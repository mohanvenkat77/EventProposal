require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const URL = process.env.DB_URI;
app.listen(PORT, console.log(`Server running on ${PORT}...`));
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb Connected sucessfully...."))
  .catch((err) => console.log("Mongodb connection failed", err.message));
