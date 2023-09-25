import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

/**
 * A radio button component.
 *
 * This component displays a radio button with a label. It can be used in a group of
 * radio buttons to allow users to select a single option.
 *
 * @param {Object} props - Component props.
 * @param {string} props.label - The label to display next to the radio button.
 * @param {string} props.value - The value associated with the radio button.
 * @param {string} props.selectedValue - The currently selected value in the group.
 * @param {function} props.onSelect - A function to handle the selection of the radio button.
 * @param {Object} props.styles - An object containing style definitions for the component.
 * @returns {React.Component} The rendered RadioButton component.
 */
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