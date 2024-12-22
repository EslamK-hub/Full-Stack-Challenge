import examPicture from "../assets/Exam-01.svg";
import photo from "../assets/User-Profile.png";
import Announcement from "./Announcement";
import Quiz from "./Quiz";
import { Button } from "@mui/material";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import { Trans, useTranslation } from "react-i18next";

export default function Content() {
    const { t } = useTranslation();
    return (
        <section>
            <Trans>
                <div className="section-container">
                    <div className="exam-content">
                        <div>
                            <h1>{t("examsTime")}</h1>
                            <p>{t("description")}</p>
                            <i>
                                "Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit."
                            </i>
                            <Button
                                variant="contained"
                                style={{
                                    background: "#dbe497",
                                    color: "#0f3f57",
                                    maxWidth: "fit-content",
                                    fontSize: "clamp(14px, 2.5vw, 16x)",
                                }}
                            >
                                {t("tipsButton")}
                            </Button>
                        </div>
                        <div className="img">
                            <img src={examPicture} alt="Exams Time Image" />
                        </div>
                    </div>
                    <div className="content">
                        <div className="announcement-container">
                            <div className="header">
                                <h3>{t("announcementHeader")}</h3>
                                <span>{t("all")}</span>
                            </div>
                            <div className="announcement">
                                <Announcement
                                    image={photo}
                                    name="Mr.Ahmed Mostafa"
                                    subject="Math 101"
                                    post="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae nemo amet rem itaque suscipit, corrupti voluptates
                    magnam voluptas cumque dignissimos nostrum pariatur, nisi,
                    numquam ad unde voluptatum quasi odio repudiandae!"
                                ></Announcement>
                                <Announcement
                                    image={photo}
                                    name="Mr.Ahmed Mostafa"
                                    subject="Math 101"
                                    post="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae nemo amet rem itaque suscipit, corrupti voluptates
                    magnam voluptas cumque dignissimos nostrum pariatur, nisi,
                    numquam ad unde voluptatum quasi odio repudiandae!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae nemo amet rem itaque suscipit, corrupti voluptates
                    magnam voluptas cumque dignissimos nostrum pariatur, nisi,
                    numquam ad unde voluptatum quasi odio repudiandae!"
                                ></Announcement>
                                <Announcement
                                    image={photo}
                                    name="Mr.Ahmed Mostafa"
                                    subject="Math 101"
                                    post="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae nemo amet rem itaque suscipit, corrupti voluptates
                    magnam voluptas cumque dignissimos nostrum pariatur, nisi,
                    numquam ad unde voluptatum quasi odio repudiandae!"
                                ></Announcement>
                            </div>
                        </div>
                        <div className="quiz-container">
                            <div className="header">
                                <h3>{t("whatsDue")}</h3>
                                <span>{t("all")}</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <div className="quiz">
                                <Quiz
                                    title="Unit 2 quiz"
                                    course="Physics 02"
                                    topic="Unit2 motion and forces"
                                    due="10 Dec 2024 - 09:00 PM"
                                    btnName={t("startQuiz")}
                                >
                                    <HourglassTopOutlinedIcon
                                        style={{ color: "#0f3f57" }}
                                    ></HourglassTopOutlinedIcon>
                                </Quiz>
                                <Quiz
                                    title="12-12 Assignment"
                                    course="Arabic k12"
                                    topic="الوحدة التانية - الافعال"
                                    due="10 Dec 2024 - 09:00 PM"
                                    btnName={t("solveAssignment")}
                                >
                                    <FactCheckOutlinedIcon
                                        style={{ color: "#0f3f57" }}
                                    ></FactCheckOutlinedIcon>
                                </Quiz>
                            </div>
                        </div>
                    </div>
                </div>
            </Trans>
        </section>
    );
}




