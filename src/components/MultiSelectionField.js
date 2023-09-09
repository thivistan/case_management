import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

/**
 * A component for a question that needs multiple selection. It is up to the parent component
 * to pass appropriate data and handle it with appropriate function onSelect.
 * @param {Object} props Component props
 * @param {Object} props.data The data to store the selected choices and all options.
 * @param {Function} props.onSelect The function to handle the stored data
 * @param {Object} props.styles The style for this component
 * @param {String} props.objectKey The key pointing to the choice value to be rendered.
 */
export default function MultiSelectionField({ data, onSelect, styles, objectKey }) {
  function handleSelect(value) {
    onSelect(value);
  }

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity
          style={item.selected ? styles.selected : styles.unselected}
          key={item.id}
          onPress={() => handleSelect(item[objectKey])}
        >
          <Text style={item.selected ? styles.textSelected : styles.textUnselected}>
            {item[objectKey]}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
