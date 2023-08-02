import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React from 'react';

export const FormButton = ({ title }) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 17,
    color: '#31c5e2',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 20,
  },
});
