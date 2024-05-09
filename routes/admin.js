const express = require("express");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/admin/add-product' method='POST' ><input type='text' name='title'><button type='submit'>Add Product</button></input></form>"
  );
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log("폼 요청 받음 : ", req.body);
  res.redirect("/");
});

module.exports = router;
