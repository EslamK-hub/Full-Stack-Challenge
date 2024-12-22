const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
const announcementRoutes = require("./routes/announcement.route");
const quizRoutes = require("./routes/quiz.route");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/announcements", announcementRoutes);
app.use("/api/quizzes", quizRoutes);

const Port = process.env.PORT || 3000;
app.listen(Port, () => {
    connectDB();
    console.log(`Server is running on port ${Port}`);
});
