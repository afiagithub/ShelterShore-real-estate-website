import { NavLink } from "react-router-dom";
import bannerImg from "../../public/asset/buyorsell.jpg"

const BuyOrSell = () => {
    return (
        <div className="hero rounded-xl mt-20 mb-12" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(1, 4, 5, 0.5), rgba(1, 4, 5, 0.7)),
        url(${bannerImg})`
        }}>
            <div className="hero-content text-center text-neutral-content py-20">
                <div className="">
                    <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold w-4/5 lg:w-3/5 mx-auto leading-normal">
                        <span className="text-deep-purple font-bebas text-5xl md:text-6xl lg:text-7xl">
                            Buy or Sell </span>
                        Property Easily With Our Help</h1>
                    <p className="mb-5 px-3 lg:px-0 lg:w-4/5 mx-auto">Whether you're looking to acquire your dream resort,
                        sell your luxury vacation rental, or invest in a lucrative hotel property,
                        our platform offers a seamless and tailored experience to meet your needs.</p>
                    <div className="flex flex-row justify-center gap-4">
                        <NavLink to="/sell" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-deep-purple rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-deep-purple group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-white bg-[#70296333] transition-all duration-300 transform group-hover:translate-x-full ease">Sell Property</span>
                            <span className="relative invisible">Sell Property</span>
                        </NavLink>
                        <a href="/" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-deep-purple rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-deep-purple group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-white bg-[#70296333] transition-all duration-300 transform group-hover:translate-x-full ease">Browse Property</span>
                            <span className="relative invisible">Browse Property</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyOrSell;