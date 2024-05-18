const express = require("express");
const app = express();

const film = require("./routes/film");
const actor = require("./routes/actor");
const category = require("./routes/category");

app.use("/film", film);
app.use("/actor", actor);
app.use("/category", category);

app.listen(5000, () => {
  console.log("Server ready...");
});
