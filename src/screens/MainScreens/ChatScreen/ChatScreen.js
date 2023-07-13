import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import ContactPersonListItem from '../../../components/ContactListItem';


const ChatScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      
      <View style={styles.container}>
        <Text style={styles.text}>Therapist</Text>
      </View>
      <ContactPersonListItem />

      <View style={styles.container}>
        <Text style={styles.text}>Case Manager</Text>
      </View>
      <ContactPersonListItem />
    
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    padding: 10,
  }
});

export default ChatScreen;
