import { NavLink } from "react-router-dom";

const AboutBanner = () => {
    return (
        <div
            className="hero h-[700px]"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(21, 21, 21, 0.65), rgba(21, 21, 21, 0.65)), 
                                  url('https://cdn.prod.website-files.com/5eb4cf4dd47d715c00e6548b/61c1eba2b99e6dc395f2206f_salesteam-in-dealership-three-beautiful-consultan-2021-09-03-15-21-36-utc-p-1600.jpeg')`,
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
                        About Us
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
                            <NavLink to="/about" className={({ isActive }) =>
                                `text-white ${isActive ? 'text-yellow-500 font-bold' : 'text-white hover:text-gray-100'}`
                            }>About
                            </NavLink>
                        </li>


                    </ul>
                </div>
            </div>
        </div>

        
    );
};

export default AboutBanner;