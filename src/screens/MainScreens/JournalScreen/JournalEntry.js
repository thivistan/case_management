import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MoodList from './MoodsList';
import getButtonStyle from './MoodsList';
import moods from './MoodsList';

const JournalEntry = (props) => {
  const [selectedMood, setSelectedMood] = useState('happy');
  const moods = [
      { id: 'happy', emoji: '😀' },
      { id: 'sad', emoji: '😔' },
      { id: 'angry', emoji: '😡' },
      { id: 'tired', emoji: '😴' },
      { id: 'excited', emoji: '🤩' },
      { id: 'neutral', emoji: '😐' },
    ];


  const selectedEmoji = moods.find(emojis => emojis.id === props.emoji)
  const handleDelete = () => {
    props.handleDelete(props.id);
  };
  return (
    <View style={styles.entry}>
      <View style={styles.topView}>
        <Text style={styles.emoji}>{selectedEmoji.emoji}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity onPress={handleDelete}>
          <Text style={styles.emoji}>&#x274C;</Text>
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
    width: 30,
    height: 30,
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
  emoji: {
    fontSize: 30
  }
});

export default JournalEntry;
