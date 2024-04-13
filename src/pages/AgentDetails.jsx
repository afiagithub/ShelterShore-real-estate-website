import { useLoaderData,  } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { Helmet } from "react-helmet-async";

const AgentDetails = () => {
    const agents = useLoaderData()
    console.log(agents)

    return (
        <div className="px-5 md:px-10 lg:px-14 py-5">
            <Helmet>
                <title>ShelterShore | Agents</title>
            </Helmet>
            {
                agents.map(agent => <div key={agent.id} className="hero mb-16 border-2 border-deep-purple p-2 rounded-2xl">
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                        <div className="md:w-2/5 lg:w-4/5">
                        <img src={agent.image} className="h-[70vh] w-full rounded-lg shadow-2xl" />
                        <div className="flex flex-row gap-4 items-center justify-around py-3 px-4 
            bg-[#70296333] text-deep-purple text-xl rounded-xl">
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
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">{agent.name}</h1>
                            <h1 className="text-xl font-bold mt-2">{agent.designation}</h1>
                            <p className="py-6 lg:w-4/5">{agent.description}</p>
                            <p className="text-deep-purple font-semibold pb-2"><span className="font-bold text-black">License Number: </span>
                                {agent.license_number}</p>
                            <p className="text-deep-purple font-semibold pb-2"><span className="font-bold text-black">Service Areas: </span>
                                {agent.service_areas}</p>
                            <p className="font-bold text-black pb-1">Specialities: </p>
                            {
                                agent.specialties.map(sp =>
                                    <li key={sp} className="ml-3 text-deep-purple font-semibold">{sp}</li>)
                            }
                            <p className="text-deep-purple font-semibold py-2">
                                <span className="font-bold text-black">Total Property Sold: </span>
                                {agent.sold_property_no}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AgentDetails;