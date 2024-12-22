const express = require("express");
const {
    getAllQuizzes,
    addQuiz,
    getQuiz,
    updateQuiz,
    deleteQuiz,
} = require("../controllers/quiz.controller");
const router = express.Router();

// ----------------------------------------- Get All Quizzes ----------------------------------------- //
router.get("/", getAllQuizzes);

// ----------------------------------------- Add Quiz ----------------------------------------- //
router.post("/", addQuiz);

// ----------------------------------------- Get Quiz ----------------------------------------- //
router.get("/:id", getQuiz);

// ----------------------------------------- Update Quiz ----------------------------------------- //
router.put("/:id", updateQuiz);

// ----------------------------------------- Delete Quiz ----------------------------------------- //
router.delete("/:id", deleteQuiz);

module.exports = router;
