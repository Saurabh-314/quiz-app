const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  question_type: { type: String, required: true, default: "radio" },
  opt1: { type: String, required: true },
  opt2: { type: String, required: true },
  opt3: { type: String, required: true },
  opt4: { type: String, required: true },
  currect_answer: { type: String, required: true },
  question_level: { type: Number, required: true, default: 1 },
})


module.exports = mongoose.model("Question", questionSchema);