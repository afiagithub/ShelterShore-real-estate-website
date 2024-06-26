import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../Components/SocialLogin";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location?.state || '/';

    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show);
    }
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {        
        const { email, pass } = data;
        signInUser(email, pass)
            .then((result) => {                
                if (result.user)
                    navigate(`${from}`)
                    toast.success("Successfully Logged In")
            })
            .catch(() => {                
                toast.error("Invalid Credential")
            });
    }
    return (
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10">
            <Helmet>
                <title>ShelterShore | LoginPage</title>
            </Helmet>
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" placeholder="leroy@jenkins.com" {...register("email", { required: true })}
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    {errors.email && <span className="text-red-700 font-semibold">This field is required</span>}
                    <div className="relative">
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                        </div>
                        <input type={show ? "text" : "password"} name="password" {...register("pass", { required: true })}
                            placeholder="*****" {...register("pass", { required: true })}
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        <div className="absolute top-10 right-4 text-lg" onClick={handleToggle}>
                            {show ? <FaEyeSlash /> : <FaRegEye />}
                        </div>
                    </div>
                    {errors.pass && <span className="text-red-700 font-semibold">This field is required</span>}
                </div>
                <div className="space-y-2">
                    <div>
                        <input type="submit" value="Sign In"
                            className="w-full px-8 py-3 bg-deep-purple text-white text-lg font-semibold rounded-xl 
                            border-2 border-deep-purple hover:border-deep-purple hover:bg-transparent 
                            hover:text-deep-purple" />
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
                        <Link to="/register" className="hover:underline dark:text-deep-purple font-bold">
                            Sign up</Link>.
                    </p>
                </div>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;