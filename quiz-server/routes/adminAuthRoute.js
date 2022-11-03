const router = require('express').Router();
const Question = require("../models/QuestionModel");
const { verifyAuthToken } = require('./verifyToken');

router.post("/addquestion",  async (req, res) => {
  const newQuestion = await Question.create(req.body);
  res.status(201).json({
    success: true,
    newQuestion,
  })
})

router.get("/question", verifyAuthToken, async (req, res) => {
  const level = req.query.level;
  const questions = await Question.find({ question_level: level });
  res.status(200).json({
    success: true,
    questions
  })
})

module.exports = router;