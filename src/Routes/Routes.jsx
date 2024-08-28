import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Error from "../Error/Error";
import Register from "../Pages/Login/Register";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Cars from "../Pages/Products/Cars";
import CarDetail from "../Pages/Products/CarDetail";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/cars",
                element: <Cars></Cars>
            }
        ],

    },
    {
        path: "/car/:id",
        element: <PrivateRoute>
            <CarDetail></CarDetail>
        </PrivateRoute>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/login",
        element: <Login></Login>
    }
]);

export default router;