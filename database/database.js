const mongoose = require("mongoose");

async function startDatabase() {
  mongoose.connect(
    "mongodb+srv://lukinhas:1234@cluster0.nohkb2w.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  const db = mongoose.connection;

  db.on("error", (err) => {
    console.log(err);
  });
  db.once("error", () => {
    console.log("Database Opened");
  });

  const linkSchema = await new mongoose.Schema({
    title: String,
    url: String,
    description: String,
  });

  const Link = await mongoose.model("Link", linkSchema);
}
module.exports = startDatabase;
