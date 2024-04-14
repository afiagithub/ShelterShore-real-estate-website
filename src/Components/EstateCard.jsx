import { TiPointOfInterestOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const EstateCard = ({ estate }) => {
    const { id, estate_title, segment_name, price, status, area, location, facilities, image } = estate;
    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded-xl h-[100%]" 
        data-aos="fade-up" data-aos-duration="500">
            <figure className="">
                <img src={image} alt="Shoes" className="h-60 w-full" />
            </figure>
            <div className="card-body px-6 py-3">
                <div className="flex flex-row items-center gap-6">
                    <div className="badge bg-deep-purple text-white p-4 font-bold">{segment_name}</div>
                    <div className="badge bg-transparent text-magenta p-4 font-bold border-2 border-magenta">For {status}</div>
                </div>
                <h2 className="card-title">{estate_title}</h2>
                <p>{location}</p>
                <div className="grid grid-cols-2 gap-2 flex-grow">
                    {
                        facilities.map(facility =>
                            <div className="font-bold text-sm flex flex-row items-center text-deep-purple" key={facility}>
                                <TiPointOfInterestOutline /> {facility}</div>)
                    }
                </div>
                <div className="flex flex-row items-center justify-between w-full mt-4 font-bold">
                    <p className="font-mont text-lg">Price: <span className="text-deep-purple text-2xl font-bebas">{price}</span></p>
                    <p className="font-mont text-lg">Area: <span className="text-deep-purple text-2xl font-bebas">{area} acres</span></p>
                    
                </div>
                <div className="card-actions ">
                    <NavLink to={`/${id}`} className="btn w-full bg-deep-purple text-white px-8 text-lg border-2 border-deep-purple 
                hover:border-deep-purple hover:bg-transparent hover:text-deep-purple">View Details</NavLink>
                </div>
            </div>
        </div>
    );
};

EstateCard.propTypes = {
    estate: PropTypes.obj,
    id: PropTypes.number,
    estate_title: PropTypes.string,
    segment_name: PropTypes.string,
    price: PropTypes.string,
    status: PropTypes.string,
    area: PropTypes.number,
    location: PropTypes.string,
    facilities: PropTypes.array,
    image: PropTypes.string,
}

export default EstateCard;