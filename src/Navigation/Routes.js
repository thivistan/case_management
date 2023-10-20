import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { AuthContext } from './AuthProvider';
import { StatusBar } from 'expo-status-bar';

/**
 * Navigation container that provides the appropriate routes for the app.
 * @returns {React.Component} A navigation container that provides the appropriate routes for the app.
 */
export default function Routes() {
    const { user } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {/* Render the main stack if the user is authenticated */}
            <StatusBar style="auto" />
            {user ? <MainStack /> : <AuthStack />}
            
        </NavigationContainer>
    );
}