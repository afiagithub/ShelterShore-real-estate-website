import { Helmet } from "react-helmet-async";
import Estates from "../Components/Estates";
import Slider from "../Components/Slider";
import { useLoaderData} from "react-router-dom";
import Agents from "../Components/Agents";
import BuyOrSell from "../Components/BuyOrSell";
import Services from "../Components/Services";

const Home = () => {
    const estates = useLoaderData()
    return (
        <div className="px-5 md:px-10 lg:px-14 py-5">
            <Helmet>
                <title>ShelterShore | HomePage</title>
            </Helmet>
           <Slider></Slider>
           <Estates estates={estates}></Estates>
           <Agents></Agents>
           <BuyOrSell></BuyOrSell>
           <Services></Services>
        </div>
    );
};

export default Home;