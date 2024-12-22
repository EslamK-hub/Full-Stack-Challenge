import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                dashboard: "Dashboard",
                schedule: "Schedule",
                courses: "Courses",
                gradeBook: "GradeBook",
                performance: "Performance",
                announcement: "Announcement",
                welcomeUser: "Welcome User",
                search: "Search",
                examsTime: "EXAMS TIME",
                description:
                    "Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams",
                tipsButton: "View exams tips",
                announcementHeader: "Announcements",
                all: "All",
                whatsDue: "What's due",
                course: "Course",
                topic: "Topic",
                dueTo: "Due to",
                startQuiz: "Start Quiz",
                solveAssignment: "Solve Assignment",
            },
        },
        ar: {
            translation: {
                dashboard: "وحة التحكم",
                schedule: "الجدول",
                courses: "الدورات التدريبية",
                gradeBook: "دفتر الدرجات",
                performance: "الأداء",
                announcement: "الإعلان",
                welcomeUser: "مرحباً بالمستخدم",
                search: "ابحث",
                examsTime: "وقت الامتحانات",
                description:
                    "ها نحن هنا، هل أنت مستعد للمواجهة؟ لا تقلق، لقد أعددنا بعض النصائح لتكون جاهزًا لامتحاناتك",
                tipsButton: "عرض نصائح الامتحانات",
                announcementHeader: "الإعلانات",
                all: "الكل",
                whatsDue: "المهام المستحقة",
                course: "المادة",
                topic: "الموضوع",
                dueTo: "الاستحقاق",
                startQuiz: "ابدأ الاختبار",
                solveAssignment: "حل الواجب",
            },
        },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
