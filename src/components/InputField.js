import React from 'react';
import { View, TextInput, KeyboardAvoidingView } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { colors } from '../global';

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