import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { colors } from '../global';

/**
 * 
 * Customizable input field component.
 * 
 * @param {Object} props The properties passed to the component.
 * @param {'email' | 'password' | 'name'} props.type The type of input field, which determines the left icon and certain behaviors (e.g., secure text entry for password).
 * @param {string} props.value The current value of the input field.
 * @param {function} props.onChangeText Callback function that is called when the text in the input field changes.
 * @param {React.Component} [props.buttonRight] Optional component (typically a button) that can be displayed on the right side of the input field.
 * @returns {React.Component} A styled input field with an icon on the left and optional button on the right.
 */
export default function InputField({ type, value, onChangeText, buttonRight }) {
    const icons = {
        email: 'mail-outline',
        password: 'key-outline',
        name: 'person-outline',
    }

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 5,
            marginTop: 25
        }}>
            <Icon
                name={icons[type]}
                size={22}
                color='#666'
                style={{ marginRight: 5 }}
            />
            <TextInput
                placeholder={type.charAt(0).toUpperCase() + type.slice(1)}
                selectionColor={colors.primaryBold}
                style={{ flex: 1, paddingHorizontal: 5 }}
                secureTextEntry={type === 'password'}
                keyboardType={type === 'email' ? 'email-address' : 'default'}
                value={value}
                onChangeText={value => onChangeText(value)}
                autoCapitalize='none'
                autoCorrect={false}
            />
            {buttonRight}
        </View>
    );
}