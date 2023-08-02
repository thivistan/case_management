import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React from 'react';

export const FormButton = ({ title }) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
        <Image
          style={styles.textAndIcon}
          source={require('../../../assets/images/forms_checkbox_logo.png')}
        />
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
  textAndIcon: {
    position: 'absolute',
    left: 320,
    top: 20,
    width: 20,
    height: 20,
  },
});
