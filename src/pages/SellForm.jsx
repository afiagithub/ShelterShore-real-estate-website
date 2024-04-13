import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const SellForm = () => {
    const handleSell = () => {
        toast.success("Successfully Submitted")
    }
    return (        
        <section className="px-5 md:px-10 lg:px-14 py-5">
            <Helmet>
                <title>ShelterShore | Sell Form</title>
            </Helmet>
            <form className="container flex flex-col mx-auto space-y-12">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <h2 className="font-bebas text-6xl text-center mb-5">
                        Sell Form</h2>
                    <p className="font-mont text-lg mt-4 mb-10 font-semibold text-center w-4/5 lg:w-3/5 mx-auto capitalize">
                        Please Fill Up This form to provide necessary information about
                        your property so we can look for potential buyers</p>
                </div>
                <fieldset className="grid grid-cols-4 gap-6 p-6 items-center justify-center rounded-md shadow-sm mx-auto">
                    <div className="grid grid-cols-6 gap-4 col-span-full">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-xl font-bold">Property name</label>
                            <input type="text" placeholder="Property name"
                                className="mt-3 py-3 pl-4 w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-75 
                            focus:dark:ring-deep-purple dark:bg-gray-100" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                        <label className="text-xl font-bold">Property Type</label> <br />
                            <select className="select select-bordered mt-3" >
                                <option disabled selected>Type</option>
                                <option>Hotel</option>
                                <option>Motel</option>
                                <option>Resort</option>
                                <option>Vacation Rental</option>
                                <option>Lodge</option>
                                <option>Guesthouse</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-1">
                        <label className="text-xl font-bold">Status</label> <br />
                            <select className="select select-bordered mt-3" >
                                <option disabled selected>Status</option>
                                <option>Sale</option>
                                <option>Rent</option>
                            </select>
                        </div>                        
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-xl font-bold">Area (acres)</label>
                            <input type="text" placeholder="Area"
                                className="mt-3 py-3 pl-4 w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-75 
                            focus:dark:ring-deep-purple dark:bg-gray-100" />
                        </div>
                        <div className="col-span-full sm:col-span-4">
                            <label className="text-xl font-bold">Facilities</label>
                            <input type="text" placeholder="Facilities"
                                className="mt-3 py-3 pl-4 w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-75 
                            focus:dark:ring-deep-purple dark:bg-gray-100" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-xl font-bold">City</label>
                            <input type="text" placeholder="City"
                                className="mt-3 py-3 pl-4 w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-75 
                            focus:dark:ring-deep-purple dark:bg-gray-100" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-xl font-bold">State / Province</label>
                            <input type="text" placeholder="State / Province" 
                            className="mt-3 py-3 pl-4 w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-75 
                            focus:dark:ring-deep-purple dark:bg-gray-100" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-xl font-bold">ZIP / Postal</label>
                            <input type="text" placeholder="ZIP / Postal" 
                            className="mt-3 py-3 pl-4 w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-75 
                            focus:dark:ring-deep-purple dark:bg-gray-100" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-xl font-bold">Parking Space</label>
                            <input type="number" placeholder="Parking" 
                            className="mt-3 py-3 pl-4 w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-75 
                            focus:dark:ring-deep-purple dark:bg-gray-100" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-xl font-bold">Price (Estimated)</label>
                            <input type="number" placeholder="Price" 
                            className="mt-3 py-3 pl-4 w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-75 
                            focus:dark:ring-deep-purple dark:bg-gray-100" />
                        </div>
                        <div className="col-span-full sm:col-span-6">
                            <label className="text-xl font-bold">Description</label> <br />
                            <textarea className="textarea textarea-bordered  mt-3 py-3 pl-4 w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-75 
                            focus:dark:ring-deep-purple dark:bg-gray-100" placeholder="Description" rows="4" cols="50"></textarea>
                        </div>                        
                    </div>
                </fieldset>
                <NavLink to="/sell" onClick={handleSell} className="btn w-1/5 mx-auto text-lg text-white 
                bg-deep-purple px-8 border-2 border-deep-purple hover:border-deep-purple 
                hover:bg-transparent hover:text-deep-purple">Submit</NavLink>
            </form>
        </section>
    );
};

export default SellForm;