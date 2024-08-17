import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { TbLogout } from "react-icons/tb";
import logo from "/images/logo2.png"


const CarNav = () => {

    const { user, logOutUser } = useAuth();

    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch(error => console.log(error))

    }

    const navOptions = (
        <>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-yellow-600 font-bold md:text-lg' : "text-slate-600 md:text-lg font-semibold"} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-yellow-600 font-bold md:text-lg' : "text-slate-600 md:text-lg font-semibold"} to="/cars">Cars</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-yellow-600 font-bold md:text-lg' : "text-slate-600 md:text-lg font-semibold"} to="/about">About</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-yellow-600 font-bold md:text-lg' : "text-slate-600 md:text-lg font-semibold"} to="/contact">Contact</NavLink></li>
            {
                user ? (
                    <>
                        <li>
                            <details className="dropdown dropdown-bottom dropdown-end">
                                <summary className="m-1">
                                    <div>
                                        <img className="w-8 h-8 md:w-12 md:h-12  rounded-full" src={user?.photoURL
                                        } alt="" />
                                    </div>

                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-10 bg-base-100 rounded-box w-48">
                                    <li><p className="text-yellow-600 font-bold">
                                        {user?.displayName || 'Unknown User'}
                                    </p>
                                    </li>

                                    <li><p onClick={() => handleLogOut()} className="text-yellow-600 font-bold"> <TbLogout className="mr-2" />
                                        Log out </p>
                                    </li>
                                </ul>
                            </details>
                        </li>

                    </>

                )
                    :
                    (<li><NavLink className={({ isActive }) => isActive ? 'text-yellow-600 font-bold md:text-lg md:ml-4' : "md:ml-4 text-blue-800 md:text-lg font-semibold"} to="/login"><FaRegUserCircle />Login
                    </NavLink></li>)
            }
        </>
    )

    return (

        <div className="navbar max-w-9xl mx-auto w-full ">
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-yellow-200">
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
                        className="menu menu-sm dropdown-content bg-base-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>

                <div>
                    <Link to={"/"} className="flex items-center gap-0">
                        <img src={logo} alt="" className="w-28 h-28 " />
                        <p className=" text-3xl md:text-5xl gap-0 text-blue-500 font-extrabold">
                            A
                            <span className="text-yellow-500 text-3xl md:text-5xl font-semibold ">utoLynx</span>
                        </p>
                    </Link>
                </div>

            </div>

            <div className="navbar-end hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>


            </div>



        </div>
    );
};



export default CarNav;