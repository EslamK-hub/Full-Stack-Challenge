const Quiz = require("../models/quiz.model");

// ----------------------------------------- Get All Quizzes ----------------------------------------- //
const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

// ----------------------------------------- Add Quiz ----------------------------------------- //
const addQuiz = async (req, res) => {
    const { question, options, correctAnswer } = req.body;

    try {
        const newQuiz = new Quiz({
            question,
            options,
            correctAnswer,
        });
        await newQuiz.save();
        res.status(201).json(newQuiz);
    } catch (err) {
        res.status(400).send("Bad Request");
    }
};

// ----------------------------------------- Get Quiz ----------------------------------------- //
const getQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) {
            return res.status(404).send("Quiz not found");
        }
        res.json(quiz);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

// ----------------------------------------- Update Quiz ----------------------------------------- //
const updateQuiz = async (req, res) => {
    const { question, options, correctAnswer } = req.body;

    try {
        const quiz = await Quiz.findByIdAndUpdate(
            req.params.id,
            { question, options, correctAnswer },
            { new: true }
        );
        if (!quiz) {
            return res.status(404).send("Quiz not found");
        }
        res.json(quiz);
    } catch (err) {
        res.status(400).send("Bad Request");
    }
};

// ----------------------------------------- Delete Quiz ----------------------------------------- //
const deleteQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndDelete(req.params.id);
        if (!quiz) {
            return res.status(404).send("Quiz not found");
        }
        res.json({ message: "Quiz deleted" });
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

module.exports = {
    getAllQuizzes,
    addQuiz,
    getQuiz,
    updateQuiz,
    deleteQuiz,
};
