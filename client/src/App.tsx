import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import RequireAuth from "./utils/RequireAuth";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth>
                                <Dashboard />
                            </RequireAuth>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
export default App;
