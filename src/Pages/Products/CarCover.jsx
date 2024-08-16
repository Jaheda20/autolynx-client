import { NavLink } from "react-router-dom";


const CarCover = () => {
    return (

        <div
            className="hero h-[700px]"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(21, 21, 21, 0.65), rgba(21, 21, 21, 0.65)), 
                                  url('https://teltonika-gps.com/cdn/extras/10499/auto-dealers-use-case-preview-1920x1280.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="hero-content text-neutral-content text-center flex flex-col">
                <div className="max-w-md">
                    <h1
                        className="mb-5 text-5xl md:text-7xl font-semibold"
                    >
                        Contact Us
                    </h1>

                </div>
                <div className="breadcrumbs text-xl">
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) =>
                                `text-white ${isActive ? 'text-yellow-500 font-bold' : 'text-white hover:text-gray-100'}`
                            }>Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cars" className={({ isActive }) =>
                                `text-white ${isActive ? 'text-yellow-500 font-bold' : 'text-white hover:text-gray-100'}`
                            }>Cars
                            </NavLink>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    );
};



export default CarCover;