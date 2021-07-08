const express = require("express");
const path = require("path");
const { Submit, Step } = require("../models");
const router = express.Router();
const { askForm } = require("../controllers/askForm");
const { askDelete } = require("../controllers/askDelete");
router.get("/history", async (req, res, next) => {
  await res.render("ask_history");
});

router.get("/form", async (req, res, next) => {
  await res.render("ask_form");
});

router.post("/info", askForm);

router.post("/form", askForm);

router.post("/delete", askDelete);

router.post("/option", async (req, res, next) => {
  try {
    const user = await Submit.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      await res.render("ask_option", {
        email: user.email,
        company: user.company,
        phone: user.phone,
        name: user.name,
        detail: user.detail,
      });
    } else {
      await res.render("ask_info", {
        message: "의뢰가 존재하지 않습니다",
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});
module.exports = router;
