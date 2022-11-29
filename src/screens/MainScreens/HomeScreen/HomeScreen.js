import React from "react";

import { useFonts } from 'expo-font';
import { SafeAreaView } from "react-native-safe-area-context";

import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function HomeScreen() {
    const [fontsLoaded] = useFonts({
        'Montserrat-Black': require('../../../assets/fonts/Montserrat-Black.ttf'),
    });

    if (!fontsLoaded) {
        return null
    };

    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 25, backgroundColor: 'white', flexDirection: 'column' }}>
            <View style={{ flex: 1, }}>
                <Text
                    style={{
                        fontFamily: 'Montserrat-Black',
                        fontSize: 16,
                    }}>
                    Upcoming appointments...</Text>

            </View>
        </SafeAreaView >
    )
}