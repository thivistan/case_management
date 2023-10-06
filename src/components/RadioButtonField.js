import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RadioButton from './RadioButton'

/**
 * A field of radio buttons.
 *
 * This component displays a group of radio buttons, each with a label. It allows users
 * to select a single option from the provided data.
 *
 * @param {Object} props - Component props.
 * @param {Object[]} props.data - An array of objects representing the radio button options.
 * @param {string} props.data[].label - The label to display next to the radio button.
 * @param {string} props.data[].value - The value associated with the radio button.
 * @param {string} props.selectedValue - The currently selected value among the radio buttons.
 * @param {function} props.onSelect - A function to handle the selection of a radio button.
 * @param {Object} props.styles - An object containing style definitions for the component.
 * @returns {React.Component} The rendered RadioButtonField component.
 */
export default function RadioButtonField({ data, onSelect, selectedValue, styles }) {

  function handleSelect(value) {
    onSelect(value);
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {data.map((item) => {
        return (
          <RadioButton
            key={item.id}
            label={item.label}
            value={item.value}
            selectedValue={selectedValue}
            onSelect={handleSelect}
            styles={styles}
          />
        );
      })}
    </View>
  );
};