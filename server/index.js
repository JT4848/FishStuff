const express = require('express')
const app = express();
const PORT = 3001;




app.use("/api", require("./api"));

app.use(require("morgan")("dev"));

app.listen(PORT, () => {
  console.log('Listening on port', PORT)
})
