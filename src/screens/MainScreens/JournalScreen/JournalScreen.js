import React, { useState} from 'react';

import {
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import JournalEntry from './JournalEntry';
import JournalModal from './JournalModal';
import QuoteButtons from './QuoteButtons';

const data = [
  {
    id: Math.random().toString(36).substr(2, 9),
    title: 'Journal Entry 1',
    date: new Date().toLocaleDateString(),
    content: 'This is the content of Journal Entry 1',
    emoji:'happy'
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    title: 'Journal Entry 2',
    date: new Date().toLocaleDateString(),
    content: 'This is the content of Journal Entry 2',
    emoji:'sad'
  },
];
const Journal = () => {
  const [journalTitle, setJournalTitle] = useState('');

  const [journalContent, setJournalContent] = useState('');
  const [journals, setJournals] = useState(data);
  const [modalVisible, setModalVisible] = useState(false);
  const [isModal, setModal] = useState(false);
  const [mood, setMood] = useState('happy');
  const switchModal = () => {
    setModalVisible(true);
    setModal(true);
  };

  const quote = (type) => {


  }
  const onAdd = () => {
    const newJournal = {
      id: Math.random().toString(36).substr(2, 9),
      title: journalTitle,
      date: new Date().toLocaleDateString(),
      content: journalContent,
      emoji: mood,
    };
    setJournals([...journals, newJournal]);
    setModalVisible(false);
    setJournalTitle('');
    setJournalContent('');
    setMood('');
  };

  const onDelete = (id) => {
    setJournals(journals.filter((journal) => journal.id !== id));
  };



  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView  style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', paddingVertical: 15 }}>
        <TouchableOpacity style={styles.button} onPress={switchModal}>
          <Text style={styles.newJournal}>Add New Journal!</Text>
        </TouchableOpacity>
      </View>
      <QuoteButtons />
      <View style={styles.quoteBox}>
        <Text style={styles.title}>Quote of the Day</Text>
        <Text style={styles.quote}> "Be yourself; everyone else is already taken." - "Oscar Wilde" </Text>
      </View>
      <View style={{ alignItems: 'center', paddingVertical: '15%' }}>
        <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#00BFFF' }}>Your Journals</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {journals.length > 0 ? (
          <FlatList
            data={journals}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <JournalEntry
                id={item.id}
                title={item.title}
                data={item.date}
                content={item.content}
                handleDelete={onDelete}
                emoji={item.emoji}
              />
            )}
          />
        ) : (
          <View style={styles.noJournalsBox}>
            <Text style={styles.noJournalsText}>You don't have any journals yet.</Text>
            <Text style={styles.noJournalsSubtext}>Start by creating a new one!</Text>
            <TouchableOpacity style={styles.noJournalsButton} onPress={switchModal}>
              <Text style={styles.noJournalsButtonText}>Create New Journal</Text>
            </TouchableOpacity>
          </View>
        )}
        {isModal ? (
          <JournalModal
            modalVisible={modalVisible}
            journalContent={journalContent}
            journalTitle={journalTitle}
            setModalVisible={setModalVisible}
            onAdd={onAdd}
            setJournalContent={setJournalContent}
            setJournalTitle={setJournalTitle}
            setMood={setMood}
          />
        ) : (
          <View></View>
        )}
      </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    marginLeft: 'auto',
  },
  hr: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#00BFFF',
    borderRadius: 25, // adjust this value to change the button's roundness
    padding: 15,
    width: '50%',
    alignItems: 'center',
  },
  newJournal: {
    color: 'white',
    fontSize: 20,
  },
  quoteBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    marginVertical: 15,
    marginLeft: '15%',
    marginRight: '15%',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  noJournalsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  noJournalsBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  noJournalsSubtext: {
    fontSize: 26,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  noJournalsButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
  },
  noJournalsButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Journal;
