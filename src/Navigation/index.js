import React from "react";
import { AuthProvider } from "./AuthProvider";
import Routes from "./Routes";
import 'react-native-gesture-handler';
import ResourcesStack from "./ResourcesStack";

/**
 * Providers component wraps the main routes of the application with authentication context.
 * 
 * @returns {React.Component} Returns the main routes of the application wrapped in the authentication context, ensuring they have access to the authentication state and related methods.
 */
export default function Providers() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}