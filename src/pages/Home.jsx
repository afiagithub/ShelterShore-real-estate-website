import Estates from "../Components/Estates";
import Slider from "../Components/Slider";
import { useLoaderData} from "react-router-dom";

const Home = () => {
    const estates = useLoaderData()
    return (
        <div>
           <Slider></Slider>
           <Estates estates={estates}></Estates>
        </div>
    );
};

export default Home;