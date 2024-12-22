import { ReactNode } from "react";
import RoofingIcon from "@mui/icons-material/Roofing";
import TodayIcon from "@mui/icons-material/Today";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
    const { t } = useTranslation();
    return (
        <ul>
            <Link href="/dashboard">
                <RoofingIcon></RoofingIcon>
                {t("dashboard")}
            </Link>
            <Link href="/dashboard">
                <TodayIcon></TodayIcon>
                {t("schedule")}
            </Link>
            <Link href="/dashboard">
                <ImportContactsIcon></ImportContactsIcon>
                {t("courses")}
            </Link>
            <Link href="/dashboard">
                <SchoolOutlinedIcon></SchoolOutlinedIcon>
                {t("gradeBook")}
            </Link>
            <Link href="/dashboard">
                <ShowChartOutlinedIcon></ShowChartOutlinedIcon>
                {t("performance")}
            </Link>
            <Link href="/dashboard">
                <CampaignOutlinedIcon></CampaignOutlinedIcon>
                {t("announcement")}
            </Link>
        </ul>
    );
}

interface LinkProps {
    href: string;
    children: ReactNode;
}

function Link({ href, children }: LinkProps) {
    return (
        <li>
            <a href={href}>{children}</a>
        </li>
    );
}
