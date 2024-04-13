import { TiPointOfInterestOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const EstateCard = ({ estate }) => {
    const { id, estate_title, segment_name, price, status, area, location, facilities, image } = estate;
    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded-xl h-[100%]" data-aos="fade-up" data-aos-duration="1000">
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
                <div className="flex flex-row items-center w-3/5 mt-4 text-2xl font-bold">
                    <p className="font-mont">Price: </p>
                    <p className="text-deep-purple font-bebas">{price}</p>
                </div>
                <div className="card-actions ">
                    <NavLink to={`/${id}`} className="btn w-full bg-deep-purple text-white px-8 text-lg border-2 border-deep-purple 
                hover:border-deep-purple hover:bg-transparent hover:text-deep-purple">View Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;