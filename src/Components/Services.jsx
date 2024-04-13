import serviceImg from "../../public/asset/key.jpg"
import { TiPointOfInterest } from "react-icons/ti";

const Services = () => {
    return (
        <section className="">
            <div className="container p-6 py-12 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="font-bebas text-5xl lg:text-6xl text-center mb-3 lg:mb-8">
                        Our Services</h2>
                    <p className="font-mont text-lg mt-4 mb-10 font-semibold text-center lg:w-3/5 mx-auto">
                        Our hospitality real estate services encompass a wide range of offerings tailored to meet
                        the diverse needs of clients in the hospitality industry.</p>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                <TiPointOfInterest className="text-5xl text-deep-purple"/>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold leading-6 text-deep-purple">
                                    Property Acquisition</h4>
                                    <p className="mt-2">
                                    We assist clients in identifying and acquiring hospitality properties 
                                    that align with their investment objectives. We leverage our market 
                                    expertise to find the perfect property.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                <TiPointOfInterest className="text-5xl text-deep-purple"/>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold leading-6 text-deep-purple">
                                    Property Disposition</h4>
                                    <p className="mt-2">
                                    For owners looking to sell their hospitality properties, we provide 
                                    comprehensive marketing strategies and transaction management services to 
                                    ensure a seamless and successful sale.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                <TiPointOfInterest className="text-5xl text-deep-purple"/>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold leading-6 text-deep-purple">
                                    Hospitality Consulting</h4>
                                    <p className="mt-2">
                                    We offer strategic consulting services to hospitality industry stakeholders, 
                                    including developers, investors, operators, and lenders.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src={serviceImg} alt="" className="object-cover mx-auto rounded-lg shadow-lg h-[80vh] w-5/6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;