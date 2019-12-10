var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/", function(req, res) {
  res.send({ foo: "bar" });
});

app.listen(5000, function() {
  console.log("Example app listening on port 5000!");
});
