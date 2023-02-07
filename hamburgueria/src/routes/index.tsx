import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Home } from "../pages/home";
import { ProtectRoutes } from "../components/protectRoutes";

export function RoutesMain() {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route element={<ProtectRoutes />} >
                <Route path="home" element={<Home />} />
            </Route>
            <Route path="*" element={<Navigate to={"login"} />} />
        </Routes>
    )
}