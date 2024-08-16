import { NavLink } from "react-router-dom";

const ContactCover = () => {
    return (
        <div
            className="hero h-[700px]"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(21, 21, 21, 0.65), rgba(21, 21, 21, 0.65)), 
                                  url('https://i.ibb.co/j6gmSzS/661d3eb71206816721de81b6-Q4-202022-20-Consumer-20-Trends-20-Report-20-How-20is-20-Foot-20-Traffic-20.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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
                            <NavLink to="/contact" className={({ isActive }) =>
                                `text-white ${isActive ? 'text-yellow-500 font-bold' : 'text-white hover:text-gray-100'}`
                            }>Contact
                            </NavLink>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactCover;