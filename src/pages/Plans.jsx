import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Plans = () => {
    const plans = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>ShelterShore | Packages</title>
            </Helmet>
            <section className="py-5 lg:py-20 dark:bg-gray-100 dark:text-gray-800">
                <div className="container px-4 mx-auto">
                    <div className="max-w-2xl mx-auto mb-5 lg:mb-16 text-center">
                        <p className="font-mont text-lg font-semibold text-center mb-4">Packages</p>
                        <h2 className="font-bebas text-5xl lg:text-6xl text-center">Choose your
                            <span className="text-deep-purple"> best </span> plan</h2>
                    </div>
                    <div className="flex flex-wrap items-stretch mx-4 lg:-mx-4">
                        {
                            plans.map(plan => <div key={plan.id} className="flex w-full mb-8 sm:px-4 md:w-1/2 
                            lg:w-1/3 lg:mb-0 hover:scale-110 hover:transition hover:ease-in-out">
                                <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                                    <div className="space-y-2">
                                        <h4 className="font-light font-bebas text-3xl">{plan.plan_name}</h4>
                                        <span className="text-4xl font-bold text-deep-purple">{plan.price}</span>
                                    </div>
                                    <p className="mt-3 leading-relaxed dark:text-gray-600 flex-grow">
                                        {plan.short_description}</p>
                                    <ul className="flex-grow mb-6 dark:text-gray-600">
                                        {
                                            plan.features.map(f => <li key={f} className="flex  mb-2 space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-deep-purple">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                </svg>
                                                <span>{f}</span>
                                            </li>)
                                        }
                                    </ul>
                                    <button className="btn w-full bg-deep-purple text-white px-8 text-lg border-2 border-deep-purple 
                hover:border-deep-purple hover:bg-transparent hover:text-deep-purple">View Details</button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Plans;