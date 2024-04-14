import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import EstateDetails from "../pages/EstateDetails";
import PrivateRoute from "../Protected/PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import AgentDetails from "../pages/AgentDetails";
import SellForm from "../pages/SellForm";
import Plans from "../pages/Plans";

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
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/agents",
                element: <AgentDetails></AgentDetails>,
                loader: () => fetch('./FakeAgents.json'),
            },
            {
                path: "/plans",
                element: <Plans></Plans>,
                loader: () => fetch('./FakePlan.json')
            },
            {
                path: "/sell",
                element: <PrivateRoute><SellForm></SellForm></PrivateRoute>,
            }
        ]
    },
]);