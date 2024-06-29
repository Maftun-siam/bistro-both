import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    // const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    /* Setting up watchman to see all changes or activity of an user  */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, curentUser => {
            setUser(curentUser);
            console.log("Current User : ", curentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe;
        }
    }, [])

    /* Creating User  */

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    /* SingIn user */
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    /* SignOut USer */

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

