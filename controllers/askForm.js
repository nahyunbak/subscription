const Submit = require("../models/submit");

exports.askForm = async (req, res, next) => {
  console.log("req.body=", req.body);
  try {
    console.log("req.body=", req.body);
    const user = await Submit.findOne(
      {
        default: true,
      },
      {
        where: {
          email: req.body.email,
        },
      }
    );
    console.log(user);
    if (user) {
      await Submit.update(
        {
          name: req.body.name,
          company: req.body.company,
          phone: req.body.phone,
          detail: req.body.detail,
        },
        {
          where: {
            email: req.body.email,
          },
        }
      );
      res.render("ask_info", {
        message: "수정이 완료되었습니다",
      });
    } else {
      await Submit.create({
        name: req.body.name,
        company: req.body.company,
        email: req.body.email,
        phone: req.body.phone,
        detail: req.body.detail,
      });
      res.render("ask_info", {
        message: "제출이 완료되었습니다",
      });
    }
  } catch (error) {
    console.error(error);
    return next(error);
  }
};
