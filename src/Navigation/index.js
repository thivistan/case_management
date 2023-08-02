import React from "react";
import { AuthProvider } from "./AuthProvider";
import Routes from "./Routes";
import 'react-native-gesture-handler';
import ResourcesStack from "./ResourcesStack";

export default function Providers() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}