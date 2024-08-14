import Lottie from "lottie-react";
import error2 from "../assets/error2.json"
import { Link } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";

const Error = () => {
    return (
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center mt-0">
            <div className="md:w-1/2">
                <Lottie animationData={error2} loop={true}></Lottie>
            </div>
            <p className="text-5xl font-bold text-slate-500 ">Page Not Found</p>
            <Link to="/">
                <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-lg text-white bg-blue-800 rounded-lg group mt-10">
                    <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-slate-600 group-hover:w-full "></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span className="relative flex items-center gap-2"> <FaCircleArrowLeft />

                        Back to Home</span>
                </button>
                
            </Link>

        </div>
    );
};

export default Error;