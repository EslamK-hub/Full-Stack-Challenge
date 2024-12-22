import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

interface QuizProps {
    title: string;
    course: string;
    topic: string;
    due: string;
    btnName: string;
    children: React.ReactNode;
}

export default function Quiz({ title, course, topic, due, btnName, children }: QuizProps) {
    const { t } = useTranslation();
    return (
        <div className="quiz-content">
            <div>
                {children}
                <h4>{title}</h4>
            </div>
            <h5>
                {t("course")}: <span>{course}</span>
            </h5>
            <h5>
                {t("topic")}: <span>{topic}</span>
            </h5>
            <h5>
                {t("dueTo")}: <span>{due}</span>
            </h5>
            <Button
                variant="outlined"
                style={{
                    border: "1px solid #0f3f57",
                    color: "#0f3f57",
                    width: "100%",
                }}
            >
                {btnName}
            </Button>
        </div>
    );
}
