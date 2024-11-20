import React from "react"
import * as ReactDOMClient from "react-dom/client"
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
import LoginComponent from "./components/LoginComponents/Login"
import RegistrationComponent from "./components/LoginComponents/Registration"
import ProtectedRoutes from "./components/LoginComponents/ProtectedRoutes"
import GuestRoutes from "./components/LoginComponents/GuestRoutes"
import MainComponent from "./components/Main"
import MainPageComponent from "./components/MainComponents/MainPage"

function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<ProtectedRoutes />}>
                    <Route index element={<Navigate to="/me" />} />
                    <Route path="me" element={<MainComponent />}>
                        <Route index element={<MainPageComponent />} />
                    </Route>
                    <Route path="createServer" element={<Navigate to="/me" />} />
                    <Route path="createGroup" element={<Navigate to="/me" />} />
                    <Route path="help" element={<Navigate to="/me" />} />
                </Route>
                <Route element={<GuestRoutes />}>
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/registration" element={<RegistrationComponent />} />
                </Route>
            </Routes>
        </>
    )
}

const app = ReactDOMClient.createRoot(document.getElementById("root"))
app.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)