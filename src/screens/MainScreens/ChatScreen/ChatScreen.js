import React from 'react';
import { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, Button, Modal } from 'react-native';
import ContactPersonListItem from '../../../components/ContactListItem';
import FloatingActionAdd from '../../../components/FloatingActionAddBtn';
import ContactSelectPopup from '../../PopupScreens/ContactSelectPopup';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const show = () => setModalVisible(true);
  const hide = () => setModalVisible(false);

      
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={styles.container}>
        <Text style={styles.text}>Therapist</Text>
      </View>

      <ContactPersonListItem />

      <View style={styles.container}>
        <Text style={styles.text}>Case Manager</Text>
      </View>
      <ContactPersonListItem />



      <FloatingActionAdd />

      <View>

        
        <ContactSelectPopup />
      </View>
    </SafeAreaView>
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
  },
});

export default ChatScreen;
