import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/images/logo2.png"
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const Login = () => {

    const { loginUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const {email, password} = data;
        loginUser (email, password) 
        .then(result => {
            console.log(result.user)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "You're logged in successfully",
                showConfirmButton: false,
                timer: 1500
              });
            navigate(location?.state || "/")
        })
        .catch(error => {
            console.log(error.message)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid Credentials",
                
              });
        }) 
    }

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
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center dark:text-gray-600">Dont have account?
                    <Link to={"/register"} className="focus:underline text-blue-800 hover:underline hover:text-yellow-500"> Register here</Link>
                </p>
                
                <SocialLogin></SocialLogin>
                
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr className="w-full dark:text-gray-600" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-800">This field is required</span>}
                        </div>
                        <div className="space-y-2 relative">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password</label>

                                </div>
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-800">This field is required</span>}
                                <span onClick={() => setShowPassword(!showPassword)} className='absolute top-8 right-4'>
                                    {
                                        showPassword ? <FaRegEye size={18} />
                                        : <FaRegEyeSlash size={18} />
                                    }
                                </span>
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

export default Login;