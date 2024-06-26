import EstateCard from "./EstateCard";
import PropTypes from 'prop-types';

const Estates = ({ estates }) => {
    return (
        <div className=" mt-8 lg:mt-20 mb-5">
            <div className="estates-heading">
                <h1 className="font-bebas text-5xl lg:text-6xl text-center mb-3 lg:mb-8">Property Collection</h1>
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

Estates.propTypes = {
    estates: PropTypes.array
}

export default Estates;