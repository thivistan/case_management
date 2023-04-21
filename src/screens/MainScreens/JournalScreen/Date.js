import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DateBox = () => {
  const currentDate = new Date().toLocaleDateString(); // get current date in string format

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{currentDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 5,
    width: '90%',
    marginLeft: 20,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DateBox;
