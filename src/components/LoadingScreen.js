import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

/**
 * Loading screen with an activity indicator.
 * @returns {React.Component} A loading screen with an activity indicator.
 */
export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            <ActivityIndicator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});