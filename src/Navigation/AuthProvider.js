import React, { createContext, useState } from 'react';
import { auth } from '../firebase/firebase';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth.signInWithEmailAndPassword(email, password);
                        console.log("Signed in with", email);
                    } catch (error) {
                        console.log(error);
                        alert(error.message);
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth.createUserWithEmailAndPassword(email, password);
                        console.log("Registered with", email);
                    } catch (error) {
                        console.log(error);
                        alert(error.message);
                    }
                },
                logout: async () => {
                    try {
                        await auth.signOut();
                    } catch (error) {
                        console.log(error);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}