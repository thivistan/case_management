import React from 'react';
import { Button, Text, View, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, globalStyles } from '../../../global';

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Entry = ({ entry }) => {
  const date = entry.date;

  return (
    <View style={[styles.entry, globalStyles.shadowNormal]}>
      {entry.video && <Icon style={styles.videoPic} name="ios-videocam-outline" size={24} />}
      <Text style={styles.date}>
        {weekday[date.getDay()]}, {month[date.getMonth()]} {date.getDate()}
      </Text>
      <Text style={styles.title}>{entry.title}</Text>
      <Text style={styles.content}>{entry.content}</Text>
    </View>
  );
};

export default function EntryList({ entries }) {
  if (entries.length == 0) return <Text style={styles.error}>No entries found</Text>;

  return (
    <View styles={styles.mainContainer}>
      {entries.map((entry) => (
        <Entry entry={entry} key={entry.date.toString()}></Entry>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    color: 'white',
    fontSize: 14,
    margin: 10,
  },
  date: {
    display: 'flex',
    color: 'white',
    fontSize: 12,
  },
  entry: {
    display: 'flex',
    backgroundColor: colors.primary,
    borderRadius: 150 / 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
  },
  error: {
    display: 'flex',
    fontSize: 14,
    margin: 10,
    textAlign: 'center',
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  mainContainer: {
    display: 'flex',
    padding: 10,
    paddingHorizontal: 30,
    height: '100%',
  },
  search: {
    justifyContent: 'center',
  },
  title: {
    display: 'flex',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  videoPic: {
    position: 'absolute',
    right: 20,
    top: 5,
    color: 'white',
  },
});
