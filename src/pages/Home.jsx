import { Helmet } from "react-helmet-async";
import Estates from "../Components/Estates";
import Slider from "../Components/Slider";
import { useLoaderData} from "react-router-dom";

const Home = () => {
    const estates = useLoaderData()
    return (
        <div className="px-5 md:px-10 lg:px-14 py-5">
            <Helmet>
                <title>ShelterShore | HomePage</title>
            </Helmet>
           <Slider></Slider>
           <Estates estates={estates}></Estates>
        </div>
    );
};

export default Home;