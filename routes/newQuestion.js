var questionRouter = require("express").Router();

questionRouter.get("/", function(req, res, next) {
  res.send("Sweet");
});

module.exports = questionRouter;
