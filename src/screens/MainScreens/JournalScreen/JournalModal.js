import React, { useState } from 'react';

import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import MoodList from './MoodsList';
import DateBox from './Date.js';

const JournalModal = ({
  modalVisible,
  setModalVisible,
  onAdd,
  setJournalTitle,
  setJournalContent,
  journalTitle,
  journalContent,
}) => {
  const handleCreate = () => {
    // You can save the journal entry to a database or storage here
    //console.log('Title:', title);
    //console.log('Mood:', mood);
    //console.log('Notes:', notes);
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text> Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>New</Text>
          <View />
        </View>
        <View style={{ paddingTop: 10 }}>
          <TextInput
            style={styles.titleBox}
            placeholder="Title"
            placeholderTextColor="#00BFFF"
            value={journalTitle}
            onChangeText={(text) => setJournalTitle(text)}
          />
          <MoodList></MoodList>
          <TextInput
            style={styles.notesBox}
            placeholder="Notes"
            placeholderTextColor="#00BFFF"
            multiline={true}
            numberOfLines={4}
            value={journalContent}
            onChangeText={(text) => setJournalContent(text)}
          />
          <DateBox></DateBox>
          <TouchableOpacity style={styles.createButton} onPress={onAdd}>
            <Text style={styles.create}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default JournalModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF',
  },
  header: {
    height: '10%',
    width: '100%',
    paddingTop: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddintLeft: 30,
  },
  headerTitle: {
    color: '#00BFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 30,
    marginTop: 5,
  },
  create: {
    color: '#00BFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleBox: {
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 8,
    fontSize: 18,
    marginBottom: 16,
    margin: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  createButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
    width: '50%',
    alignItems: 'center',
    marginLeft: 95,
  },

  notesBox: {
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'gray',
    height: 100,
    padding: 10,
    borderRadius: 8,
    margin: 10,
    fontSize: 18,
    marginBottom: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
