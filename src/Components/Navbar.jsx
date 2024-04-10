import { NavLink } from "react-router-dom";
import "../custom.css";

const Navbar = () => {
    const links = <>
        <li className="bg-transparent mx-2 text-deep-purple"><NavLink className={({isActive}) => isActive? "border-2 border-deep-purple"
        : "border-2 border-transparent"} to="/">Home</NavLink></li>
        <li className="bg-transparent mx-2 text-deep-purple"><NavLink className={({isActive}) => isActive? "border-2 border-deep-purple"
        : "border-2 border-transparent"} to="/about">About</NavLink></li>
        <li className="bg-transparent mx-2 text-deep-purple"><NavLink className={({isActive}) => isActive? "border-2 border-deep-purple"
        : "border-2 border-transparent"} to="/contact">Contact</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 px-5 md:px-10 lg:px-14 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-light font-pac text-deep-purple" href="/">ShelterShore</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold z-[1]">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink className="btn bg-deep-purple text-white px-8 text-lg border-2 border-deep-purple 
                hover:border-deep-purple hover:bg-transparent hover:text-deep-purple" to="/login">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;