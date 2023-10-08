import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import { fonts } from '../../../global';
import Icon from '@expo/vector-icons/Ionicons';
import { colors } from '../../../global';

/**
 * Button component to display a resource. Includes a favorite button.
 * 
 * @param {Object} props Component props.
 * @param {String} props.name The name of the resource.
 * @param {Object} props.data The data object of the resource.
 * @param {String} props.url The URL of the resource.
 * @param {Boolean} props.isFavorited Whether or not the resource is favorited.
 * @param {Function} props.handleFavorite A function to handle favorite.
 * @param {String} props.iconName The name of the icon to display.
 * @returns Resource button component.
 */
export default function ResourceButton({ name, data, url, isFavorited, handleFavorite, iconName }) {
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
                    navigation.navigate('Service Screen', { name, data, url })
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
        backgroundColor: colors.primary,
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