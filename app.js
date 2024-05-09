const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// 라우팅을 url 경로마다 필터링을 걸어줄 수 있음.
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // console.log("111111222 : ", res.statusCode);
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3100);
