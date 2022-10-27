import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import { app } from '../../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setuser] = useState(null)
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            setLoading(false)
        })
    }, [])

    const userInfo = { user, creatUser, login, logout, googleSignIn }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;