const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: String,
  answer: String,
  author: String,
  createAt: Date,
  updatedAt: Date
});

module.exports = mongoose.model("bankQuestions", questionSchema);
