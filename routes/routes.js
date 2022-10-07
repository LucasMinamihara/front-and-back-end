const express = require("express");
const path = require("path");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("../public/index.ejs", {
    Title: "Lucas Hideki Minamihara dos Santos",
  });
});

module.exports = routes;
