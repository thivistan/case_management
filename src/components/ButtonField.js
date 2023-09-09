import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
