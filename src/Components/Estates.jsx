import EstateCard from "./EstateCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Estates = ({ estates }) => {
    return (
        <div className=" mt-8 lg:mt-20 mb-5">
            <div className="estates-heading">
                <h1 className="font-bebas text-6xl text-center mb-8">Property Collection</h1>
                <p className="font-mont text-lg mt-4 mb-10 font-semibold text-center">
                    Discover Hospitality. Find Your Perfect Retreat</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                {
                    estates.map(estate => <EstateCard key={estate.id} estate={estate}></EstateCard>)
                }
            </div>
        </div>
    );
};

export default Estates;