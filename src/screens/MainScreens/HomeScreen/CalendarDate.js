import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CalendarDate(props) {
  return (
    <View style={styles.calendarDateStyle}>
      <TouchableOpacity
        style={{
          height: '100%',
          width: 80,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>{props.date}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  calendarDateStyle: {
    borderColor: 'green',
    borderWidth: 1,
    height: '100%',
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
