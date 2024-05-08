import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";

export const router= createBrowserRouter([
    {
        path:'/signup',
        element: <Signup/>, //Main route
    },
    {
        path:'/login',
        element: <Login/>, //Main route
    },
    {
        path:'/',
        element: <PrivateRoute><Main/></PrivateRoute> //Main route
    },
])