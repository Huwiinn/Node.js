const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  // __dirname : 절대 경로를 이 프로젝트 폴더로 고정해주는 전역 변수
  // .sendFile()에서 ','가 url 경로에서 사용되는 '/'의 자리에 들어온다고 볼 수 있음.
});

module.exports = router;
