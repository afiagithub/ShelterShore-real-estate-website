import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import PropTypes from 'prop-types';

const AgentCard = ({ agent }) => {
    const {name, designation, service_areas, image, phone_number, email, twitter_handle, facebook_profile} = agent;
    return (
        <div className="card card-compact w-80 mx-auto bg-base-100 shadow-xl" data-aos="zoom-in" data-aos-duration="1000">
            <figure><img className="h-96 w-full" src={image} alt="Shoes" /></figure>
            <div className="flex flex-row gap-4 items-center justify-around py-3 px-4 
            bg-[#70296333] text-deep-purple text-xl">
                <div className="tooltip" data-tip={phone_number}>
                    <IoCallOutline />
                </div>
                <div className="tooltip" data-tip={email}>
                    <MdOutlineMarkEmailRead />
                </div>
                <div className="tooltip" data-tip={twitter_handle}>
                    <FiTwitter />
                </div>
                <div className="tooltip" data-tip={facebook_profile}>
                    <LuFacebook />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title font-black">{name}</h2>
                <p className="text-deep-purple font-bold">{designation}</p>
                <p className="text-deep-purple font-medium text-base pb-3">
                    <span className="font-bold text-black font-bebas text-lg">
                        Service Areas:</span> {service_areas}</p>
            </div>
        </div>
    );
};

AgentCard.propTypes = {
    agent: PropTypes.obj,
    name: PropTypes.string,
    designation: PropTypes.string,
    service_areas: PropTypes.string,
    phone_number: PropTypes.string,
    email: PropTypes.number,
    twitter_handle: PropTypes.string,
    facilitifacebook_profilees: PropTypes.array,
    image: PropTypes.string,
}

export default AgentCard;