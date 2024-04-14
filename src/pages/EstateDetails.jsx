import { useLoaderData, useParams } from "react-router-dom";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { Helmet } from "react-helmet-async";
import PropTypes from 'prop-types';

const EstateDetails = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt);

    const { estate_title, segment_name, description, price, Brand, status, area, location, facilities, image, parking } = estate;
    return (
        <div className="hero w-[90%] mx-auto lg:mt-5">
            <Helmet>
                <title>ShelterShore | Estate Details</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row lg:justify-start lg:items-start gap-10">
                <div className="lg:w-1/2 mx-auto flex flex-col justify-center rounded-3xl">
                    <img src={image} className="rounded-lg shadow-2xl w-full" />
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex flex-row gap-3 px-3 font-bold text-2xl pt-5 pb-2">
                            <p className="font-bebas">Property Status: </p>
                            <p className="text-deep-purple capitalize">{status}</p>                            
                        </div>
                        <hr className="lg:hidden"/>
                        <div className="flex flex-row gap-3 px-3 font-bold text-2xl pt-5 pb-2">
                            <p className="font-bebas">Price: </p>
                            <p className="text-deep-purple">{price}</p>                            
                        </div>                        
                    </div>
                    <hr className="hidden lg:flex"/>
                </div>
                <div className="lg:w-3/5">
                    <h1 className="text-4xl font-bold font-play">{estate_title}</h1>
                    <p className="text-lg pb-3 mt-3 mb-4"><span className="text-deep-purple font-bold">Location: </span>
                        {location}</p>
                    <p className="py-3 px-2 font-bold w-full bg-black text-white rounded-xl">Description</p>
                    <p className="py-3 px-3"><span className="font-bold"></span> {description}...</p>

                    <p className="py-3 px-2 font-bold w-full bg-black text-white rounded-xl mt-8">Facilities</p>
                    <div className="py-6">
                        {
                            facilities.map(facility => <div key={facility}
                                className="flex flex-row gap-2 items-center mr-2 font-bold px-3">
                                <VscDebugBreakpointLogUnverified className="text-deep-purple" />{facility}</div>)
                        }
                    </div>

                    <p className="py-3 px-2 font-bold w-full bg-black text-white rounded-xl mt-8">Details</p>

                    <hr />
                    <div className="details lg:w-3/5 my-6 flex lg:justify-between">
                        <div className="pages space-y-2 text-deep-purple font-semibold px-3">
                            <p>Property Type:</p>
                            <p>Company:</p>
                            <p>Area:</p>
                            <p>Parking Space:</p>

                        </div>
                        <div className="pages font-bold space-y-2">
                            <p>{segment_name}</p>
                            <p className="text-right">{Brand}</p>
                            <p>{area} acres</p>
                            <p>{parking}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

EstateDetails.propTypes = {
    estate: PropTypes.obj,
    estate_title: PropTypes.string,
    segment_name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    Brand: PropTypes.string,
    status: PropTypes.string,
    area: PropTypes.number,
    location: PropTypes.string,
    facilities: PropTypes.array,
    image: PropTypes.string,
    parking: PropTypes.number,
}

export default EstateDetails;