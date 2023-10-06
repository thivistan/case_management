import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

/**
 * A single-select button field component.
 *
 * This component renders a set of selectable buttons based on the provided data.
 *
 * @param {Object} props - Component props.
 * @param {Object[]} props.data - An array of objects representing the button options.
 * @param {string} props.data[].value - The value associated with the option.
 * @param {string} props.data[].id - The unique identifier for the option.
 * @param {function} props.onSelect - A function to handle the selection of an option.
 * @param {Object} props.styles - An object containing style definitions for the component.
 * @param {string} props.selectedValue - The value of the currently selected option.
 * @returns {React.Component} The rendered ButtonField component.
 */
export default function ButtonField({ data, onSelect, styles, selectedValue }) {
  function handleSelect(value) {
    onSelect(value);
  }

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity
          style={item.value === selectedValue ? styles.selected : styles.unselected}
          key={item.id}
          onPress={() => handleSelect(item.value)}
        >
          <Text style={item.value === selectedValue ? styles.textSelected : styles.textUnselected}>
            {item.value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
