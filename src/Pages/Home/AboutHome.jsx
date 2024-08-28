import { Link } from "react-router-dom";

const AboutHome = () => {
    return (
        <div className="w-full md:h-[500px] bg-fixed"
        style={{
            backgroundImage: ` 
                          url('https://dcdws.blob.core.windows.net/dws-15022468-28734-media/sites/28734/2021/12/How-to-Finance-Your-Car.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'dimgray',
            backgroundBlendMode: 'multiply'

        }}
        >
            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between gap-10 h-full">
            <div className="md:w-1/2 relative">
                <img src="https://t4.ftcdn.net/jpg/06/35/00/91/240_F_635009125_IoYwM8yXWpgbdKYFaUR4qI5H8NBbqNrz.jpg" className="absolute top-16 left-16 w-4/5"/>
                <div className="bg-yellow-500 w-36 p-8 absolute left-[-10] bottom-8 animate-bounce">
                    <p className="text-3xl font-semibold text-blue-800">10 
                        <span className="text-xl ml-1">Years
                        </span></p>
                        <p className="text-xl font-semibold text-blue-800">Experience</p>
                </div>
            </div>
            <div className="md:w-1/2 md:p-10 p-4">
                
                <h1 className="text-3xl font-bold text-white mb-2">About AutoLynx</h1>
                <p className=" text-yellow-400 mb-8 text-lg">Connecting You to Your Perfect Drive</p>
                <p className="text-slate-50">AutoLynx blends innovation and dedication to bring you a seamless car-buying journey, offering a wide selection of top-quality vehicles and exceptional customer service that puts you in the driver's seat of your perfect car. Discover the future of car buying with AutoLynx, where your satisfaction is our destination.</p>
                <Link to="/about">
                    <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-lg text-white bg-blue-500 rounded-lg group mt-10">
                        <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-yellow-600 group-hover:w-full "></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span className="relative flex items-center gap-2">

                            Read More</span>
                    </button>
                </Link>
            </div>
            
        </div>

        </div>
        
    );
};

export default AboutHome;