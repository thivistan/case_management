import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import ContactPersonListItem from '../../../components/ContactListItem';


const ChatScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Chat Screen</Text>
      <ContactPersonListItem/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatScreen;
