const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("이건 미들웨어입니다.");
  console.log(111, req.url);
  console.log(222, req.method);
  next(); // next()를 사용하여 바로 아래에 있는 미들웨어를 실행시킬 수 있다.
});

app.use((req, res, next) => {
  console.log("이건 다른 미들웨어2 입니다.");
  console.log(333, req.path);
});

const server = http.createServer(app);

server.listen(3100);
