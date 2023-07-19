import React from 'react';
import { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import ContactPersonListItem from '../../../components/ContactListItem';
import FloatingActionAdd from '../../../components/FloatingActionAddBtn';
import ContactSelectPopup from '../../PopupScreens/ContactSelectPopup';

const ChatScreen = () => {
  
  const [buttonPopup, setButtonPopup] = useState(false);
  
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
      
      <FloatingActionAdd onClick={() => setButtonPopup(true)}/>

      


    </View>
  

  );
      <View>
        <ContactSelectPopup trigger={buttonPopup}></ContactSelectPopup>
      </View>
    


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
  },
});

export default ChatScreen;
