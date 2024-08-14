import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from '/images/logo2.png'
const Nav = () => {

    const navOptions = (
        <>
            <li><NavLink className={({ isActive }) => isActive ? 'text-yellow-200 font-bold md:text-lg' : "text-blue-100 md:text-lg font-semibold"} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'text-yellow-200 font-bold md:text-lg' : "text-blue-100 md:text-lg font-semibold"} to="/about">About</NavLink></li>
        </>
    )

    return (
        <div className="navbar absolute bg-transparent mx-auto w-full z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-yellow-100 lg:hidden">
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
                            <Link to={"/login"} className="flex items-center "><FaArrowRightFromBracket />
                            Login</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center">
                {/* <img src={logo} alt="" className="w-32 text-yellow-200"/> */}
                <a className="btn btn-ghost text-3xl md:text-5xl gap-0 text-blue-500 font-extrabold">
                    
                    A
                    <span className="text-yellow-500 text-3xl md:text-5xl font-semibold ">utoLynx</span></a>

                </div>
                
            </div>
            
            <div className="navbar-end hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
                <Link to={'/login'} className="flex items-center gap-2 ml-6 btn btn-ghost text-lg font-semibold text-blue-100">
                <FaRegUserCircle />
                Login
                </Link>

            </div>
            


        </div>
    );
};

export default Nav;