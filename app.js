const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST' ><input type='text' name='title'><button type='submit'>Add Product</button></input></form>"
  );
});

// app.get => 해당 경로에 들어오는 get 요청에만 작동한다.
// 반대로 app.post => 해당 경로에 들어오는 post 요청에만 작동한다.
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello express~~~</h1>");
});

app.listen(3100);
