import { createBrowserRouter } from "react-router";
import App from "../App"
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index: true,
                element:<Home/>
            },{
                path:"/booking",
                element:<Booking/>
            }
        ]
    },{
        path:'/auth',
        element: <AuthLayout/>,
        children:[
            {
                path:'/auth/login',
                element:<Login/>
            },
            {
                path:'/auth/register',
                element:<Register/>
            }
        ]
    }
])