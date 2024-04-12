import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import EstateDetails from "../pages/EstateDetails";
import PrivateRoute from "../Protected/PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('./FakeEstates.json'),
            },
            {
                path: "/:id",
                element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
                loader: () => fetch('./FakeEstates.json'),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/update",
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
]);