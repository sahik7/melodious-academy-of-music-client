import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase.config';
import axios from 'axios';

export const IdentityContext = createContext()
const authentication = getAuth(app);

export default function IdentityProvider({ children }) {
    const providerForGoogle = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const emailPasswordRegistration = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(authentication, email, password);
    };


    const emailPasswordSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(authentication, email, password);
    };

    function updateNameAndImage(displayName, photoURL) {
        return updateProfile(authentication.currentUser, { displayName, photoURL })
    }


    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(authentication, providerForGoogle);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(authentication);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authentication, (userNow) => {
            setUser(userNow);
            // set jwt
            {userNow && axios.post("http://localhost:5000/token", {email:userNow.email})
            .then(data => {
                console.log(data)
            })}
            setLoading(false)
        });

        return () => {
            unsubscribe();
        };
    }, []);









    return <IdentityContext.Provider value={{ user, updateNameAndImage, googleSignIn, logOut, emailPasswordSignIn, emailPasswordRegistration }}>
        {children}
    </IdentityContext.Provider>
};