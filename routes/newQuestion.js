var questionRouter = require("express").Router();
var Question = require("../models/questions.model");

questionRouter.get("/", function(req, res, next) {
  res.render("newquestion", {
    title: "Please Add a Question & Answer to the Random Question Bank"
  });
});

questionRouter.post("/", function(req, res, next) {
  const q = req.body;
  const newQuestion = new Question({
    question: q.question,
    answer: q.answer,
    author: q.author
  });

  newQuestion.save(function(err, payload) {
    if (err) return next(err);
    //saved!!!
    res.send(payload);
  });
});

module.exports = questionRouter;
