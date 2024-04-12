import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const userName = user.displayName;
    const userPhoto = user.photoURL;
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        let { fullName, photo } = data;
        if(fullName === ''){
            fullName = userName;
        }
        else if(photo === ''){
            photo = userPhoto
        }
        updateUserProfile(fullName, photo)
            .then(() => {
                navigate('/')
            });
    }
    return (
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10">
            <Helmet>
                <title>ShelterShore | Profile</title>
            </Helmet>
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Hello, {user.displayName}</h1>
                <p className="text-sm dark:text-gray-600">Update Your Profile To Your Convenience</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm">Full Name</label>
                        <input type="text" name="name" placeholder={user.displayName} {...register("fullName")}
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" value={user.email} disabled {...register("email")}
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Photo URL</label>
                        <input type="text" name="photo" placeholder={user.photoURL} {...register("photo")}
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <input type="submit" value="Update Profile"
                            className="w-full px-8 py-3 bg-deep-purple text-white text-lg font-semibold rounded-xl 
                            border-2 border-deep-purple hover:border-deep-purple hover:bg-transparent 
                            hover:text-deep-purple" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;