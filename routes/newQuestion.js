var questionRouter = require("express").Router();

questionRouter.get("/", function(req, res, next) {
  res.render("newquestion", {
    title: "Please Add a Question & Answer to the Random Question Bank"
  });
});

module.exports = questionRouter;
