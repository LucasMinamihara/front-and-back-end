const express = require("express");
const app = express();
const PORT = 3003;
const startDatabase = require("./database/database");
const routes = require("./routes/routes");

startDatabase();

app.use("/", routes);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
