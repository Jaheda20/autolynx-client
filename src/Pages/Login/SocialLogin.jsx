import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {

    const { googleLogin, setLoading } = useAuth(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleLogin()
        .then(result => {
            console.log(result.user)
            if(result.user) {
                setLoading(false)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully logged in",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate (location?.state || '/')
            }
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div className="my-6 space-y-4">
                    <button onClick={()=>handleGoogleSignIn()} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                    <FcGoogle size={20}/>
                        <p>Login with Google</p>
                    </button>

                </div>
    );
};

export default SocialLogin;