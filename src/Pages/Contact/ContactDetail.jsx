import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";

const ContactDetail = () => {
    return (
        <div className="max-w-5xl w-full mx-auto flex flex-col item-center justify-center">
            <div className=" w-full mt-10">
                
                <h1 className="text-3xl lg:text-5xl font-bold mt-6 md:leading-9 text-blue-800">Get in touch with us</h1>
                <p className="mt-14 font-semibold text-lg" >Reach out to our support team for any inquiries or assistance you need. Whether you have questions, need support, or want to provide feedback, we&apos;re here to help. We look forward to connecting with you!</p>

            </div>

            <div className="w-full mt-10 flex flex-col space-y-8">
                <h1 className="font-bold text-2xl text-blue-800">Have any questions?</h1>

                <div className="flex items-center gap-6">
                    <div className="bg-slate-100 w-20 h-20 rounded-md flex items-center justify-center">
                        <RiCustomerServiceFill size={32} className="text-yellow-500"/>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-blue-800">Call us</h3>
                        <p className="mt-2 text-lg font-semibold text-slate-600">235154545</p>
                    </div>
                    
                </div>

                <div className="flex items-center gap-6">
                    <div className="bg-slate-100 w-20 h-20 rounded-md flex items-center justify-center">
                        <MdEmail size={32} className="text-yellow-500"/>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-blue-800">Email us</h3>
                        <p className="mt-2 text-lg font-semibold text-slate-600">youremail@gmail.com</p>
                    </div>
                    
                </div>

                <div className="flex items-center gap-6">
                    <div className="bg-slate-100 w-20 h-20 rounded-md flex items-center justify-center">
                        <FaLocationArrow size={32} className="text-yellow-500"/>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-blue-800">Visit us</h3>
                        <p className="mt-2 text-lg font-semibold text-slate-600">123, Stora Torget</p>
                        
                    </div>              
                </div>

                <div className="">
                    <h3 className="text-lg font-semibold text-slate-600">Opening Times-</h3>
                    <div className="flex items-center gap-10 mt-3 font-bold text-slate-600 mb-10">
                    <p>Mon-Fri</p>
                    <p>10:00-16:00</p>

                    </div>
                    
                </div>
            </div>


        </div>
    );
};

export default ContactDetail;