import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {

    const navOptions = (
        <>
            <li><NavLink className={({ isActive }) => isActive ? 'text-blue-800 font-bold md:text-lg' : "md:text-lg font-semibold"} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'text-blue-800 font-bold md:text-lg' : "md:text-lg font-semibold"} to="/about">About</NavLink></li>
        </>
    )

    return (
        <div className="navbar absolute bg-transparent mx-auto w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                        <li>
                            <Link className="flex items-center"><FaArrowRightFromBracket />
                            Login</Link>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl md:text-5xl gap-0 text-blue-800 font-extrabold">
                    
                    Auto
                    <span className="text-slate-500 ">Lynx</span></a>
            </div>
            
            <div className="navbar-end hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
                <Link className="flex items-center gap-2 ml-6 btn btn-ghost text-lg font-semibold">
                <FaRegUserCircle />
                Login
                </Link>

            </div>
            


        </div>
    );
};

export default Nav;