import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';

const MoodList = (props) => {
  const [mood, setMood] = useState('happy');
  const moods = [
    { id: 'happy', emoji: '😀'},
    { id: 'sad', emoji: '😔' },
    { id: 'angry', emoji: '😡' },
    { id: 'tired', emoji: '😴' },
    { id: 'excited', emoji: '🤩' },
    { id: 'neutral', emoji: '😐' },
  ];

  const handleMoodSelection = (moodId) => {
    setMood(moodId)
    props.setMood(moodId);
  };

  const getButtonStyle = (selectedMood) => {
    if (selectedMood === mood) {
      return {
        borderWidth: 2,
        borderColor: 'black',
        padding: 15,
        borderRadius: 8,
        backgroundColor: 'white',
        margin: 18,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      };
    } else {
      return {
        borderWidth: 2,
        borderColor: '#ccc',
        padding: 15,
        borderRadius: 8,
        backgroundColor: 'white',
        margin: 18,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      };
    }
  };

  const renderMoodItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => handleMoodSelection(item.id)}
        style={getButtonStyle(item.id)}
      >
        <Text style={{ fontSize: 24 }}>{item.emoji}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={moods}
      renderItem={renderMoodItem}
      keyExtractor={(item) => item.id}
      numColumns={4}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
    />
  );
};
export default MoodList;

const styles = StyleSheet.create({});
