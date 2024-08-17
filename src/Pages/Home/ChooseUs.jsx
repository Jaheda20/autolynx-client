import { FaTools } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdDesignServices, MdNaturePeople } from "react-icons/md";

const ChooseUs = () => {
    return (
        <div className="max-w-7xl w-full mx-auto mt-20">
            <h1 className="text-3xl font-bold text-blue-800 text-center">Why Choose us</h1>
            <p className="text-center mt-4 text-slate-500">Explore our world-class selection of top-rated cars </p>

            <div className="grid grid-cols-2 md:grid-cols-4 mt-14 mb-20 gap-8">
                <div className="flex flex-col items-center justify-center text-center space-y-4">
                <MdNaturePeople size={72} className="text-yellow-600"/>
                <h2 className="text-2xl text-blue-800 font-semibold">Customer-Centric </h2>
                <p className="text-slate-500">At AutoLynx, your satisfaction is our priority. We provide personalized service, transparent pricing, and flexible financing options, making your buying experience smooth and stress-free</p>

                </div>

                <div className="flex flex-col items-center justify-center text-center space-y-4">
                <MdDesignServices size={72} className="text-yellow-600"/>
                <h2 className="text-2xl text-blue-800 font-semibold">Wide Range of Vehicles </h2>
                <p className="text-slate-500">AutoLynx offers a diverse selection of high-quality vehicles, from economical sedans to heavy-duty trucks, ensuring you find the perfect match for your lifestyle or business requirements</p>

                </div>
                <div className="flex flex-col items-center justify-center text-center space-y-4">
                <FaPeopleGroup size={72} className="text-yellow-600"/>
                <h2 className="text-2xl text-blue-800 font-semibold">Unmatched Expertise </h2>
                <p className="text-slate-500">With over 10 years of industry experience, AutoLynx brings deep expertise to every vehicle purchase and service, ensuring you receive the best solutions tailored to your needs</p>

                </div>
                <div className="flex flex-col items-center justify-center text-center space-y-4">
                <FaTools size={72} className="text-yellow-600"/>
                <h2 className="text-2xl text-blue-800 font-semibold">After-Sales Support </h2>
                <p className="text-slate-500">AutoLynx stands by the quality of our vehicles with comprehensive after-sales support, including maintenance services and warranties, giving you peace of mind long after your purchase</p>

                </div>
            </div>

            
        </div>
    );
};

export default ChooseUs;