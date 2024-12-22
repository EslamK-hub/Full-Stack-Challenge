import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import picture from "../assets/User-Profile.png";
import { useTranslation } from "react-i18next";

interface MenuProps {
    handleMenu: () => void;
}

export default function Navbar({handleMenu}: MenuProps) {
    const { t } = useTranslation();
    return (
        <nav>
            <div className="nav-left">
                <DragHandleOutlinedIcon style={{ fontSize: "30px", cursor: "pointer"}} onClick={handleMenu}></DragHandleOutlinedIcon>
                <h2>{t("welcomeUser")}</h2>
            </div>

            <div className="nav-right">
                <div className="search">
                    <label htmlFor="search">
                        <SearchOutlinedIcon></SearchOutlinedIcon>
                    </label>
                    <input type="text" id="search" placeholder={t("search")} />
                </div>
                <div className="notice">
                    <div className="notification">
                        <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>
                    </div>
                    <div className="email">
                        <EmailOutlinedIcon></EmailOutlinedIcon>
                    </div>

                    <img src={picture} alt="Picture" loading="lazy" />
                </div>
            </div>
        </nav>
    );
}
