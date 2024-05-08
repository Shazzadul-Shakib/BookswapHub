import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const router= createBrowserRouter([
    {
        path:'/',
        element: <Signup/>, //Main route
    },
    {
        path:'/login',
        element: <Login/>, //Main route
    },
    // {
    //     path:'/',
    //     element: <Main/>, //Main route
    // },
])