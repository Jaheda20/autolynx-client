import { Link } from 'react-router-dom';
import logo from '/images/logo2.png'
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    return (
        <div className="mx-auto w-full">
            <div className="flex items-center">
                <img src={logo} alt="" className="w-28" />
                <p className="gap-0 text-4xl font-extrabold text-blue-500">
                    A<span className="text-yellow-500">utoLynx</span>
                </p>
            </div>
            <div className="w-full text-center flex item-center justify-center my-10 ">
                <div className="w-full max-w-xl p-4 rounded-md sm:p-8 md:w-1/2 hover:bg-blue-50 shadow-lg">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Create an Account</h2>
                    <p className="text-sm text-center dark:text-gray-600">Already have an account?
                        <Link to={"/login"} className="focus:underline text-blue-800 hover:underline hover:text-yellow-500"> Login here</Link>
                    </p>


                    <form noValidate="" action="" className="space-y-8 mt-10">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="name" className="text-sm">Full Name</label>
                                </div>
                                <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="photo" className="text-sm">Profile Picture</label>
                                </div>
                                <input type="text" name="photo" id="photo" placeholder="Upload your photo" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                            <div className="flex justify-between">
                                    <label htmlFor="email" className="text-sm">Email</label>
                                </div>
                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                    
                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                        </div>
                        <button className="relative inline-flex items-center justify-center px-8 py-4 w-full overflow-hidden font-semibold text-lg text-white bg-blue-500 rounded-lg group mt-10">
                            <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-yellow-600 group-hover:w-full "></span>
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                            <span className="relative flex items-center gap-2">

                                Login</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;