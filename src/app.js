const express = require("express");
const path = require("path");
const router = require("./router/router");
const helpers = require("./helpers");
const db = require("./config/db");

require("./models/models");

db.sync()
  .then(() => console.log("Servidor Conectado"))
  .catch((e) => console.log(e));

const app = express();

app.use((req, res, next) => {
  res.locals.vardump = helpers.Vardump;
  next();
});

//app form
app.use(express.urlencoded({ extended: true }));

//app router
app.use("/", router);
//app static files
app.use(express.static("public"));

//app settings
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../src/views"));

//middleware

app.listen(process.env.PORT || 3000);
