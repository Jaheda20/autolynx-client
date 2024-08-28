import { Link } from "react-router-dom";

const LinkContact = () => {
    return (
        <div className="w-full h-[600px] bg-fixed flex"
        style={{
            backgroundImage: ` 
                          url('https://www.elavon.com/content/dam/elavon/en-us/refresh/images/industry/smiling-car-saleswoman-discussing-contract-female.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'dimgray',
            backgroundBlendMode: 'multiply'

        }}
        >
            
            <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center">
                
                <h1 className="text-3xl font-bold text-yellow-400 mb-6 ">Need help to buy/sell your car?</h1>
                <p className="text-white mt-10 text-xl max-w-3xl">Just let us know what do you like. Our service is just one call away. Don't wait! Experience exceptional service and support with ease. Reach out to us today and let us know what you need. Our friendly team is ready and eager to assist you</p>
                <Link to="/contact">
                    <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-lg text-white bg-blue-500 rounded-lg group mt-10">
                        <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-yellow-600 group-hover:w-full "></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span className="relative flex items-center gap-2">

                            Contact Us</span>
                    </button>
                </Link>
            </div>
            
        

        </div>
    );
};

export default LinkContact;