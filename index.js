const express = require("express");
const app = express();
const ImportData = require("./data.json");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/players", (req, res) => {
  res.send(ImportData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
