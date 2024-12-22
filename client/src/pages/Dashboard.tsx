import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [menu, setMenu] = useState(true);

    function handleMenu() {
        setMenu(!menu);
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 991) {
                setMenu(false);
            } else {
                setMenu(true);
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize();
    }, []);

    return (
        <div className="dashboard">
            <div className="dashboard-container">
                <div className={menu ? "left" : "small-left left"}>
                    <div className="logo-container">
                        <h1 className="logo">Coligo</h1>
                    </div>
                    <Sidebar></Sidebar>
                </div>
                <div className="right">
                    <Navbar handleMenu={handleMenu}></Navbar>
                    <Content></Content>
                </div>
            </div>
        </div>
    );
}
