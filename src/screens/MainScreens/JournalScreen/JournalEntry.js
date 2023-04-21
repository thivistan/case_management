import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MoodList from './MoodsList';
import getButtonStyle from './MoodsList';
import moods from './MoodsList';

const JournalEntry = (props) => {
  const [selectedMood, setSelectedMood] = useState('happy');

  const handleDelete = () => {
    props.handleDelete(props.id);
  };
  return (
    <View style={styles.entry}>
      <View style={styles.topView}>
        <Image style={styles.icon} source={require('./icons8-happy-50.png')} />
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity onPress={handleDelete}>
          <Image style={styles.icon} source={require('./icons8-trash-50.png')} />
        </TouchableOpacity>
      </View>
      <Text style={styles.date}>{props.date}</Text>
      <Text style={styles.content}>{props.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  entry: {
    padding: 10,
    borderBottomWidth: 15,
    borderBottomColor: 'white',
    backgroundColor: '#62d7fe',
    marginLeft: '3%',
    marginRight: '3%',
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
  },
});

export default JournalEntry;
