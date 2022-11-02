import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState, useContext } from "react";
import UserProfileScreen from '../screens/UserProfileScreen/UserProfileScreen';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const AppNav = () => {

    return (
        <NavigationContainer>
            <AppStack />
            <AuthStack />
        </NavigationContainer>
    )
}

export default AppNav;