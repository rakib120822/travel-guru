import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import News from "../pages/News";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Destination from "../pages/Destination";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: ()=> fetch('/sliderData.json')
      },
      {
        path: "/booking/:id",
        element: <Booking />,
        loader:()=> fetch('/sliderData.json')
      },{
        path:'/news',
        element:<News/>
      },{
        path:"/blog",
        element:<Blog/>
      }
      ,{
        path:"/contact",
        element:<Contact/>
      },{
        path:'/destination',
        element:<Destination/>
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },

  {
    path:'/*',
    element:<ErrorPage/>
  }
]);
