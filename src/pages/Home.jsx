import Estates from "../Components/Estates";
import Slider from "../Components/Slider";
import { useLoaderData} from "react-router-dom";

const Home = () => {
    const estates = useLoaderData()
    return (
        <div className="px-5 md:px-10 lg:px-14 py-5">
           <Slider></Slider>
           <Estates estates={estates}></Estates>
        </div>
    );
};

export default Home;