import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const SocialLogin = () => {
    const { googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const handleSocialLogin = (socialProvider) => {
        socialProvider()
        .then(result => {
            if(result.user){
                toast.success("Successfully Logged In")
                navigate(`${from}`)
            }
        });
    }
    
    return (
        <div className="mt-5 space-y-4">
            <button onClick={() => handleSocialLogin(googleLogin)} className=" w-full text-center border-2 border-deep-purple py-3 rounded-xl flex flex-row 
                    items-center justify-center gap-3 text-xl">
                <FcGoogle />
                <p className="text-base">Sign in with Google</p>
            </button>
            <button onClick={() => handleSocialLogin(githubLogin)} className="w-full text-center border-2 border-deep-purple py-3 rounded-xl flex flex-row 
                    items-center justify-center gap-3 text-xl">
                <FaGithub />
                <p className="text-base">Sign in with GitHub</p>
            </button>
        </div>
    );
};

export default SocialLogin;