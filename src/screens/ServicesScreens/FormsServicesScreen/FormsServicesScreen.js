import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { BasicInfoButton } from '../../../components/ResourceButtons/FormButtons';

const FormsServicesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.MostCommonText}>Most Common</Text>
        <BasicInfoButton title="Basic Information" />
      </View>

      <View>
        <Text style={styles.SupportGroupText}>Support Groups</Text>
      </View>
    </ScrollView>
  );
};

export default FormsServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccf3fb',
  },
  MostCommonText: {
    color: '#31c5e2',
    fontWeight: 'bold',
    fontSize: '20',
    position: 'absolute',
    left: 20,
    top: 65,
  },
  SupportGroupText: {
    color: '#31c5e2',
    fontWeight: 'bold',
    fontSize: '20',
    position: 'absolute',
    left: 20,
    top: 180,
  },
});
