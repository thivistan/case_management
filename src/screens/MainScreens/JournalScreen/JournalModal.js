import React from 'react';
import { Modal, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const JournalModal = ({ modalVisible, setModalVisible, onAdd, setJournalTitle, setJournalContent, journalTitle, journalContent }) => {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.modal}>
        <TextInput
          style={styles.input}
          placeholder="Enter a title for your new journal"
          onChangeText={(text) => setJournalTitle(text)}
          value={journalTitle}
        />
        <TextInput
          style={[styles.input, {height: 200}]}
          placeholder="Enter the content for your new journal"
          onChangeText={(text) => setJournalContent(text)}
          value={journalContent}
          multiline={true}
        />
        <TouchableOpacity style={styles.button} onPress={onAdd}>
          <Text>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%'
  },
  button: {
    backgroundColor: '#00BFFF',
    borderRadius: 25,
    padding: 15,
    width: '50%',
    alignItems: 'center',
    marginVertical: 10
  }
});

export default JournalModal;