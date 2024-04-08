import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="px-5 md:px-10 lg:px-14 py-5">
            <Navbar></Navbar>
            <Outlet></Outlet>           
        </div>
    );
};

export default MainLayout;