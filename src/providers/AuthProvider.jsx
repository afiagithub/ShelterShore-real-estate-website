import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, currentUser => {
                setUser(currentUser)
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

    const AuthInfo = { user, createUser, signInUser, googleLogin, githubLogin, logOut }
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