import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login";

export const router= createBrowserRouter([
    {
        path:'/',
        element: <Login/>, //Main route
    }
])