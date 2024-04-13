import { useNavigate } from "react-router-dom";
import alertImg from "../../public/asset/error.png"
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center my-10">
            <Helmet>
                <title>ShelterShore | 404 Page</title>
            </Helmet>
            <img className="w-52" src={alertImg} alt="" />
            <h1 className="text-3xl font-bold mt-8 mb-2 uppercase">Oops! Page not found</h1>
            <p className="font-semibold text-xl text-rose-700">Sorry the page you are looking for 
            does not exists</p>
            <button onClick={() => navigate('/')} 
            className="btn my-10 text-xl bg-transparent text-rose-700 rounded-full border-4 border-gray-400">
                Go To HomePage</button>
        </div>
    );
};

export default ErrorPage;