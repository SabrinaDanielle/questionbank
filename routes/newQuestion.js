var questionRouter = require("express").Router();

questionRouter.get("/", function(req, res, next) {
  res.render("newquestion", {
    title: "Please Add a Question & Answer to the Random Question Bank"
  });
});

questionRouter.post("/", function(req, res, next) {
  res.send("Welcome Post, We've Been Waiting");
});
module.exports = questionRouter;
