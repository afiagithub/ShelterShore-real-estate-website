import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
    const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const handleToggle = () => {
        setShow(!show);
    }
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { email, pass } = data;
        signInUser(email, pass)
            .then((result) => {
                toast.success("Successfully Logged In")
                console.log(result.user)
            })
            .catch((error) => {
                toast.error(error.message)
            });
    }
    return (
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10">
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
            <div className="mt-5 space-y-4">
                <button onClick={() => googleLogin()} className=" w-full text-center border-2 border-deep-purple py-3 rounded-xl flex flex-row 
                    items-center justify-center gap-3 text-xl">
                    <FcGoogle />
                    <p className="text-base">Sign in with Google</p>
                </button>
                <button onClick={() => githubLogin()} className="w-full text-center border-2 border-deep-purple py-3 rounded-xl flex flex-row 
                    items-center justify-center gap-3 text-xl">
                    <FaGithub />
                    <p className="text-base">Sign in with GitHub</p>
                </button>
            </div>
        </div>
    );
};

export default Login;