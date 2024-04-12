import { Helmet } from "react-helmet-async";
import aboutImg from "../../public/about.jpg"


const About = () => {
    return (
        <div className="px-5 md:px-10 lg:px-16 py-5">
            <Helmet>
                <title>ShelterShore | About Us</title>
            </Helmet>
            <div className="hero lg:mt-5">
                <div className="flex flex-col lg:flex-row-reverse justify-between gap-5">
                    <img src={aboutImg} className="lg:w-2/5 rounded-lg shadow-2xl" />
                    <div className="lg:w-3/5">
                        <h1 className="font-play leading-snug text-4xl lg:text-5xl font-bold">
                            Finding Your Haven, Every Shore, Every Step</h1>
                        <p className="py-8 lg:w-5/6 ">Welcome to
                            <span className="text-deep-purple font-bold"> ShelterShore </span>
                            Real Estate Agency, where every property is more than just a building
                            – it's a gateway to endless possibilities in the world of hospitality. Our dedicated team comprises seasoned
                            professionals who are well-versed in the nuances of the hospitality sector.
                            From boutique hotels to sprawling resorts, from cozy bed-and-breakfasts to luxurious
                            vacation rentals, we have the expertise to assist you in every aspect of your
                            journey.</p>
                    </div>
                </div>
            </div>

            {/* faq section */}
            <section className="lg:my-10">
                <div className="container flex flex-col justify-center py-8 mx-auto ">
                    <h2 className="text-2xl font-semibold sm:text-4xl mb-4 lg:mb-7">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 text-deep-purple font-bold">
                                What types of properties do we specialize in?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                We specialize in a wide range of hospitality real estate,
                                including hotels, motels, resorts, vacation rentals, lodges, guesthouses, and more.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 text-deep-purple font-bold">
                                How do we determine the value of a hospitality property?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                Valuing hospitality properties involves a comprehensive analysis of factors such as
                                location, property condition, revenue potential, market trends, and comparable sales
                                data. Our team utilizes industry expertise and market insights to provide accurate
                                valuations tailored to each property.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 text-deep-purple font-bold">
                                Do we work with international clients or properties located outside of our area?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                Yes, we have experience working with both domestic and international clients,
                                as well as properties located in various regions. Our network of industry connections
                                allows us to facilitate transactions and provide expert guidance across different markets.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 text-deep-purple font-bold">
                                What sets our agency apart from others in the industry?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                Our agency stands out for our deep expertise in hospitality real estate,
                                personalized service, attention to detail, and commitment to client satisfaction.
                                We strive to exceed expectations and deliver exceptional results for every client,
                                no matter the size or scope of the transaction.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 text-deep-purple font-bold">
                                What should a customer consider when purchasing a hospitality property?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                When purchasing a hospitality property, factors to consider include location,
                                property size, amenities, revenue potential, market demand, financing options,
                                and zoning regulations. Our experienced agents can guide you through the process and
                                help you make informed decisions.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* contact section */}
            <section className="py-10 my-10 rounded-2xl dark:text-gray-900">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4 font-bold text-lg">Fill in the form to contact us</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Banani, Road No. 22, Dhaka-1213</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>01516111914</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>shletershore@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <label className="block">
                            <span className="mb-1 text-xl font-bold">Full name</span>
                            <input type="text" placeholder="John Doe"
                                className="block mt-3 py-3 pl-4 w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-75 
                            focus:dark:ring-deep-purple dark:bg-gray-100" />
                        </label>
                        <label className="block">
                            <span className="mb-1 text-xl font-bold">Email address</span>
                            <input type="email" placeholder="john@gmail.com"
                                className="block mt-3 py-3 pl-4 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 
                            focus:dark:ring-deep-purple dark:bg-gray-100" />
                        </label>
                        <label className="block">
                            <span className="mb-1 text-xl font-bold">Message</span>
                            <textarea rows="3" className="block mt-3 py-3 pl-4 w-full 
                            rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-deep-purple dark:bg-gray-100"></textarea>
                        </label>
                        <button type="button" className="btn bg-deep-purple text-white text-xl 
                        font-semibold px-6 border-2 border-deep-purple hover:text-deep-purple hover:bg-transparent 
                        hover:border-deep-purple">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default About;