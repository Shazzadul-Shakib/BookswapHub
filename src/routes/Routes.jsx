import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../pages/ForgetPassword";
import Homepage from "../pages/Homepage";
import AddBook from "../pages/AddBook";
import BookDetails from "../pages/BookDetails";
import BorrowedBook from "../pages/BorrowedBook";
import Notification from "../pages/Notification";
import NotFound from "../pages/NotFound";

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
        path:'/forgetpassword',
        element: <ForgetPassword/>, //Main route
    },
    {
        path:'/',
        element: <PrivateRoute><Main/></PrivateRoute>, //Main route
        children:[
            {
                path:'/',
                element:<Homepage/>
            },
            {
                path:'/addbook',
                element:<AddBook/>
            },
            {
                path:'/book/:book_id',
                element:<BookDetails/>
            },
            {
                path:'/borrowedbook',
                element:<BorrowedBook/>
            },
            {
                path:'/notification',
                element:<Notification/>
            },
            {
                path:'*',
                element:<NotFound/>
            },
        ]
    },
])