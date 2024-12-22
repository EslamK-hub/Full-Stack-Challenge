import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/app/store";
import { login, logout } from "../redux/features/authSlice";
import { Button } from "@mui/material";

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    function handleLoginLogout() {
        if (isLoggedIn) {
            dispatch(logout());
        } else {
            dispatch(login());
        }
    }

    function handleNavigateToDashboard() {
        if (isLoggedIn) {
            navigate("/dashboard");
        } else {
            alert("Please log in first!");
        }
    }

    return (
        <div className="home-container">
            <h1>Welcome To Home</h1>
            {!isLoggedIn ? (
                <Button variant="contained" onClick={handleLoginLogout}>
                    {isLoggedIn ? "Logout" : "Login"}
                </Button>
            ) : (
                <>
                    <Button variant="contained" onClick={handleLoginLogout}>
                        {isLoggedIn ? "Logout" : "Login"}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleNavigateToDashboard}
                    >
                        Dashboard
                    </Button>
                </>
            )}
        </div>
    );
}

export default Home;
