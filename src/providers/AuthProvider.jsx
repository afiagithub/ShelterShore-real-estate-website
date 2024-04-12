import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
        })
    }

    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, currentUser => {
                setUser(currentUser)
                setLoading(false)
                console.log(currentUser)
            })
        }

        return () => {
            unsubscribe();
        }

    }, [])

    const logOut = () => {
        return signOut(auth)
    }

    const AuthInfo = { user, createUser, signInUser, googleLogin, githubLogin, updateUserProfile, logOut }
    if (loading) {
        return <div className="text-center flex flex-col items-center justify-center h-[100vh]">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;