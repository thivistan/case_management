import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RadioButton from './RadioButton'


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