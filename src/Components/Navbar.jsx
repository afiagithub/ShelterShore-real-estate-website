import { NavLink } from "react-router-dom";
import "../custom.css";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoImg from "../../public/home.png"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleSigOut = () => {
        logOut()
            .then(() => {
                toast.success("Logged Out")
            })
    }
    const links = <>
        <li className="bg-transparent mx-2 text-deep-purple"><NavLink className={({ isActive }) => isActive ? "border-2 border-deep-purple bg-[#7029631a]"
            : "border-2 border-transparent"} to="/">Home</NavLink></li>
        <li className="bg-transparent mx-2 text-deep-purple"><NavLink className={({ isActive }) => isActive ? "border-2 border-deep-purple bg-[#7029631a]"
            : "border-2 border-transparent"} to="/about">About</NavLink></li>
        <li className="bg-transparent mx-2 text-deep-purple"><NavLink className={({ isActive }) => isActive ? "border-2 border-deep-purple bg-[#7029631a]"
            : "border-2 border-transparent"} to="/agents">Agents</NavLink></li>
        <li className="bg-transparent mx-2 text-deep-purple"><NavLink className={({ isActive }) => isActive ? "border-2 border-deep-purple bg-[#7029631a]"
            : "border-2 border-transparent"} to="/plans">Packages</NavLink></li>
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
                        {
                            user ? <li className="bg-transparent mx-2 text-deep-purple"><NavLink className={({ isActive }) => isActive ? "border-2 border-deep-purple bg-[#7029631a]"
                                : "border-2 border-transparent"} to="/update">Update Profile</NavLink></li> : ""
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-light font-pac text-deep-purple" href="/">
                    <img className="h-8 lg:h-10 w-8 lg:w-10 rounded-xl" src={logoImg} alt="" /> ShelterShore</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold z-[1]">
                    {links}
                    {
                        user ? <li className="bg-transparent mx-2 text-deep-purple"><NavLink className={({ isActive }) => isActive ? "border-2 border-deep-purple bg-[#7029631a]"
                            : "border-2 border-transparent"} to="/update">Update Profile</NavLink></li> : ""
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex flex-row gap-3">
                        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                            <button><img className="w-12 h-12 rounded-full" src={user.photoURL || 'https://i.ibb.co/QnTrVRz/icon.jpg'} alt="" /></button>
                        </div>
                        <NavLink onClick={handleSigOut} className="btn bg-deep-purple text-white px-4 border-2 border-deep-purple 
                    hover:border-deep-purple hover:bg-transparent hover:text-deep-purple" to="/">LogOut</NavLink>

                    </div>
                        :
                        <NavLink className="btn bg-deep-purple text-white px-8 text-lg border-2 border-deep-purple 
                hover:border-deep-purple hover:bg-transparent hover:text-deep-purple" to="/login">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;