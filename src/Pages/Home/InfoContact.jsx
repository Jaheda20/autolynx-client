import { GiCarKey } from "react-icons/gi";
import { MdDirectionsCarFilled } from "react-icons/md";
import { Link } from "react-router-dom";


const InfoContact = () => {
    return (
        <div className="w-full h-[650px] flex items-center"
            style={{
                backgroundImage: `url(https://dotyumzonirqv.cloudfront.net/publish/wp-content/uploads/2021/11/Startline-Shutterstock-image.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'dimgray',
                backgroundBlendMode: 'multiply'
            }}>
            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="bg-yellow-500 py-20 px-14">
                    <div className="flex items-center">
                        <GiCarKey size={72} className=" mr-4" />

                        <div>
                            <h1 className="text-3xl font-semibold text-blue-800 mb-2">Are You looking for a car?</h1>
                            <p>Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are</p>

                        </div>

                    </div>
                    <Link to="/cars">
                        <button className="relative inline-flex items-center justify-center px-8 py-2 overflow-hidden font-semibold text-white bg-blue-500 rounded-lg group mt-6 ml-14">
                            <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-yellow-600 group-hover:w-full "></span>
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                            <span className="relative flex items-center gap-2">

                                View More</span>
                        </button>
                    </Link>
                </div>

                <div className="bg-blue-800 py-20 px-14">
                    <div className="flex items-center">
                        <MdDirectionsCarFilled size={72} className="mr-4" />

                        <div>
                            <h1 className="text-3xl font-semibold text-yellow-500 mb-2">Do You want to sell a car?</h1>
                            <p className="text-slate-100">What’s your car worth? Receive the absolute best value for your trade-in vehicle. We even handle all paperwork</p>
                        </div>

                    </div>
                    <Link to="/contact">
                        <button className="relative inline-flex items-center justify-center px-8 py-2 overflow-hidden font-semibold text-white bg-yellow-600 rounded-lg group mt-6 ml-14">
                            <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-blue-500 group-hover:w-full "></span>
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                            <span className="relative flex items-center gap-2">

                                Contact Us</span>
                        </button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default InfoContact;