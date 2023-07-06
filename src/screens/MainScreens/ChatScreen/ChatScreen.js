import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';



const ChatScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Chat Screen</Text>
      
      
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
