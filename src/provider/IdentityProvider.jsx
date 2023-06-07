import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase.config';

export const IdentityContext = createContext()
const authentication = getAuth(app);

export default function IdentityProvider({children}) {
    const providerForGoogle = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true)

    const emailPasswordRegistration = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(authentication, email, password);
    };


    const emailPasswordSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(authentication, email, password);
    };


    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(authentication, providerForGoogle);
    };









    return  <IdentityContext.Provider value={{googleSignIn,emailPasswordSignIn,emailPasswordRegistration}}>
        {children}
    </IdentityContext.Provider>
};