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
                <div className="bg-yellow-500 flex items-center py-20 px-14">
                    <GiCarKey size={72} className=" mr-4"/>

                    <div>
                        <h1 className="text-3xl font-semibold text-blue-800 mb-2">Are You looking for a car?</h1>
                        <p>Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are</p>
                    </div>

                </div>

                <div className="bg-blue-800 flex items-center py-20 px-14">
                    <MdDirectionsCarFilled size={72} className="mr-4"/>

                    <div>
                        <h1 className="text-3xl font-semibold text-yellow-500 mb-2">Do You want to sell a car?</h1>
                        <p className="text-slate-100">What’s your car worth? Receive the absolute best value for your trade-in vehicle. We even handle all paperwork</p>
                    </div>

                </div>
            </div>

            
        </div>
    );
};

export default InfoContact;