import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { Alert } from 'react-native';
import LoadingScreen from '../components/LoadingScreen';

export const AuthContext = createContext({});

/**
 * AuthProvider component manages and provides authentication state and methods to its children.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children Child components that will have access to the auth context.
 * 
 * @returns {React.Component} Returns the context provider that wraps around the children, making the auth state and methods accessible to them. 
 * If the authentication state is being determined, it will display a loading screen.
 */
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set up a listener for Firebase's authentication state changes
        const unsubscribe = auth.onAuthStateChanged(authUser => {
            setUser(authUser);
            setLoading(false);
        });

        // Clean up the subscription on component unmount
        return () => unsubscribe();
    }, []);

    if (loading) return <LoadingScreen />;

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
                },
                handleForgotPassword: async (email, callback) => {
                    try {
                        await auth.sendPasswordResetEmail(email);
                        console.log("Reset email sent to " + email);
                        Alert.alert(
                            "Password Reset",
                            "Email sent to " + email,
                            [
                                {
                                    text: 'Continue',
                                    onPress: callback,
                                }
                            ]
                        );
                    } catch (error) {
                        console.log(error);
                        alert(error.message);
                    }
                },
            }}
        >
            {children}
        </AuthContext.Provider >
    )
}