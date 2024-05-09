const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// 라우팅을 url 경로마다 필터링을 걸어줄 수 있음.
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // console.log("111111222 : ", res.statusCode);
  res.status(404).send("<h1>페이지를 찾을 수 없습니다.</h1>");
});

app.listen(3100);
