import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

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
    right: 100,
    fontSize: 15,
    color: '#31c5e2',
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 105,
    left: 18,
    borderRadius: 50,
    padding: 15,
    paddingHorizontal: 115,
  },
});
