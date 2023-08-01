import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const FormsServicesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Most Common</Text>
    </ScrollView>
  );
};

export default FormsServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccf3fb',
  },
  text: {
    color: '#31c5e2',
    fontWeight: 'bold',
    fontSize: '20',
    position: 'absolute',
    left: 20,
    top: 65,
  },
});
