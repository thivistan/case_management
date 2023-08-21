import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function RadioButton({ label, value, selectedValue, onSelect, styles }) {
    const isSelected = selectedValue === value;
  
    return (
      <TouchableOpacity onPress={() => onSelect(value)}>
        <View style={styles.radioBtnContainer}>
          <View
            style={styles.radioBtnBorder}>
            {isSelected && <View style={styles.radioBtnSelected} />}
          </View>
          <Text style={styles.radioBtnText}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  };