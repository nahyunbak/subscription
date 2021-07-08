const Submit = require("../models/submit");

exports.askDelete = async (req, res, next) => {
  console.log(req.body.email);

  try {
    const user = await Submit.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      const user = await Submit.destroy({
        where: {
          email: req.body.email,
        },
      });
      res.render("ask_info", {
        message: "의뢰 삭제가 완료되었습니다!",
      });
    } else {
      res.render("ask_info", {
        message: "의뢰가 존재하지 않습니다.",
      });
    }
  } catch (error) {
    console.error(error);
    return next(error);
  }
};
