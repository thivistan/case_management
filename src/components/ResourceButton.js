import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import { fonts } from '../global';
import Icon from '@expo/vector-icons/Ionicons';
import { colors } from '../global';

// Not on 211LA.org
export default function ResourceButton({ name }) {
    const [isFavorited, setIsFavorited] = useState(false);
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity
                style={styles.favoriteBtn}
                onPress={() => {
                    setIsFavorited(!isFavorited);
                }}
            >
                <Icon style={{ fontSize: 20, color: colors.primaryBold }} name={isFavorited ? "star" : "star-outline"}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.categoryBtn}
                onPress={() => {
                    navigation.navigate(name);
                }}
            >
                <Text style={styles.btnText}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create( {
    favoriteBtn: {
        position: 'relative',
        left: '75%',
        top: '40%',
    },
    categoryBtn: {
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 10,
        margin: 10,
    },
    btnText: {
        fontFamily: fonts.default,
        textAlign: 'center',
    }
} );