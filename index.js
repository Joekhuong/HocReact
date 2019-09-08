var express = require("express");
var app = express();

//tat ca duong dan khach hang gui len di vao public ma tim

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

app.get("/", function(req, res) {
  res.render("trangchu");
});
