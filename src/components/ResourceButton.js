import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import { fonts } from '../global';
import Icon from '@expo/vector-icons/Ionicons';
import { colors } from '../global';

// Not on 211LA.org
export default function ResourceButton({ name, isFavorited, handleFavorite, iconName }) {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity
                style={styles.favoriteBtn}
                onPress={() => {
                    handleFavorite();
                }}
            >
                <Icon style={{ fontSize: 20, color: colors.primary }} name={isFavorited ? "star" : "star-outline"} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.categoryBtn}
                onPress={() => {
                    navigation.navigate(name);
                }}
            >
                {iconName && <Icon style={{ fontSize: 20, color: 'white' }} name={iconName} />}
                <Text style={styles.btnText}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    favoriteBtn: {
        position: 'relative',
        left: '75%',
        top: '40%',
    },
    categoryBtn: {
        // borderColor: colors.primaryBold,
        backgroundColor: colors.primary,
        // borderWidth: 1.5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 10,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnText: {
        fontFamily: fonts.defaultBold,
        color: 'white',
        textAlign: 'center',
    }
});