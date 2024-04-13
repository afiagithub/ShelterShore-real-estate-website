import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";

const AgentCard = ({ agent }) => {
    return (
        <div className="card card-compact w-80 mx-auto bg-base-100 shadow-xl">
            <figure><img className="h-96 w-full" src={agent.image} alt="Shoes" /></figure>
            <div className="flex flex-row gap-4 items-center justify-around py-3 px-4 
            bg-[#70296333] text-deep-purple text-xl">
                <div className="tooltip" data-tip={agent.phone_number}>
                    <IoCallOutline />
                </div>
                <div className="tooltip" data-tip={agent.email}>
                    <MdOutlineMarkEmailRead />
                </div>
                <div className="tooltip" data-tip={agent.twitter_handle}>
                    <FiTwitter />
                </div>
                <div className="tooltip" data-tip={agent.facebook_profile}>
                    <LuFacebook />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title font-black">{agent.name}</h2>
                <p className="text-deep-purple font-bold">{agent.designation}</p>
                <p className="text-deep-purple font-medium text-base pb-3">
                    <span className="font-bold text-black font-bebas text-lg">
                        Service Areas:</span> {agent.service_areas}</p>
            </div>
        </div>
    );
};

export default AgentCard;