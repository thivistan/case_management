import React from "react";
import { Text, View } from "react-native";
import ResourcePage from '../../../components/ResourcePage'
export default function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Home Screen</Text>
        </View>
    )
}