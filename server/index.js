const express = require('express')
const app = express();
const PORT = 6969;
const path = require("path");

app.use(express.static(path.join(__dirname, "..", "client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/dist/index.html"));
});


app.use("/api", require("./api"));

app.use(require("morgan")("dev"));

app.listen(PORT, () => {
  console.log('Listening on port', PORT)
})
