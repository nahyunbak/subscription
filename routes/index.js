const express = require("express");

const ask = require("../routes/ask");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.render("index");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/portfolio", async (req, res, next) => {
  try {
    res.render("portfolio");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
