import React from 'react';
import { createContext } from 'react';

const AuthProvider = ({ children }) => {
    const AuthContext = createContext()

    const userInfo = {}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;