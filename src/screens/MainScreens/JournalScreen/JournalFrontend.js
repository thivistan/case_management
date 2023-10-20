import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, fonts } from '../../../global';
import EntryList from './EntryList';
import { ScrollView } from 'react-native-gesture-handler';

const testData = [
  {
    title: 'Title01',
    content: 'maybe cap at around certain character limits (200?)',
    mood: 4,
    date: new Date('October 19, 2023'),
    video: true,
  },
  {
    title: 'Title02',
    content: 'The description is really weird',
    mood: 4,
    date: new Date('October 18, 2023'),
    video: false,
  },
  {
    title: 'Title03',
    content: 'maybe cap at around certain character limits (200?)',
    mood: 4,
    date: new Date('October 01, 2023'),
    video: true,
  },
  {
    title: 'Title04',
    content: 'This entry should not be showing up',
    mood: 4,
    date: new Date('September 30, 2023'),
    video: true,
  },
  {
    title: 'Title05',
    content: 'The description is really weird',
    mood: 4,
    date: new Date('October 29, 2023'),
    video: false,
  },
  {
    title: 'Title06',
    content:
      'This is supposed to be a sizeable entry. This is supposed to be a sizeable entry. This is supposed to be a sizeable entry. \
    This is supposed to be a sizeable entry. This is supposed to be a sizeable entry. This is supposed to be a sizeable entry. \
    This is supposed to be a sizeable entry.',
    mood: 4,
    date: new Date('October 27, 2023'),
    video: false,
  },
];

/*
{
    title: string,
    content: maybe cap at around certain character limits (200?)
    mood: int,
    date: string,
    video: video != null
}
*/

const currentDate = new Date();

// Monday is the start of the week
const weekStart = new Date();
weekStart.setDate(currentDate.getDate() - (currentDate.getDay() || 7) + 1);

// Sunday is the end of the week
const weekEnd = new Date();
weekEnd.setDate(currentDate.getDate() + (7 - currentDate.getDay() || 0));

const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

export default function JournalFrontend({ route, navigation }) {
  const [searchStr, setSearchStr] = useState('');

  // limit to 30 entries?
  const [entries, setEntries] = useState(testData);
  const [weekEntries, setWeekEntries] = useState([]);
  const [monthEntries, setMonthEntries] = useState([]);

  const [rWeekEntries, setRWeekEntries] = useState([]);
  const [rMonthEntries, setRMonthEntries] = useState([]);

  useEffect(() => {
    setEntries(testData);
    setWeekEntries(entries.filter((entry) => entry.date >= weekStart && entry.date <= weekEnd));
    setMonthEntries(
      entries.filter(
        (entry) =>
          entry.date >= monthStart &&
          entry.date <= monthEnd &&
          (entry.date < weekStart || entry.date > weekEnd)
      )
    );
  }, [entries]);

  const searchEntries = (searchStr) => {
    const searchLower = searchStr.toLowerCase();
    const searchDate = new Date(Date.parse(searchStr));
    let results = null;

    if (searchDate.toString() != 'Invalid Date') {
      results = entries.filter((entry) => entry.date == searchDate);
    } else {
      results = entries.filter(
        (entry) =>
          entry.title.toLowerCase().includes(searchLower) ||
          entry.content.toLowerCase().includes(searchLower)
      );
    }

    setRWeekEntries(results.filter((entry) => entry.date >= weekStart && entry.date <= weekEnd));
    setRMonthEntries(
      results.filter(
        (entry) =>
          entry.date >= monthStart &&
          entry.date <= monthEnd &&
          (entry.date < weekStart || entry.date > weekEnd)
      )
    );
  };

  return (
    <View style={styles.mainContainer}>
      {/*<Text style={styles.text}>How are you feeling today?</Text>*/}

      <View style={styles.search}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSearchStr(text)}
          placeholder="Search by date or entry"
          keyboardType="visible-password"
          placeholderTextColor={'white'}
          defaultValue={searchStr}
        />
        <TouchableHighlight style={styles.searchPic} onPress={() => searchEntries(searchStr)}>
          <Icon style={styles.icon} name="ios-search" size={14} />
        </TouchableHighlight>
      </View>

      {entries != [] && searchStr == '' ? (
        <View style={styles.scroll}>
          <ScrollView>
            <Text style={styles.text}>THIS WEEK</Text>
            <EntryList entries={weekEntries}></EntryList>
            <Text style={styles.text}>THIS MONTH</Text>
            <EntryList entries={monthEntries}></EntryList>
          </ScrollView>
        </View>
      ) : (
        <View style={styles.scroll}>
          <ScrollView>
            <Text style={styles.text}>THIS WEEK</Text>
            <EntryList entries={rWeekEntries}></EntryList>
            <Text style={styles.text}>THIS MONTH</Text>
            <EntryList entries={rMonthEntries}></EntryList>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    padding: 10,
    paddingHorizontal: 30,
    height: '100%',
  },
  input: {
    backgroundColor: colors.primary,
    alignSelf: 'stretch',
    borderRadius: 150 / 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: 'white',
  },
  icon: {
    color: 'white',
  },
  text: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 3,
    marginTop: 10,
    fontFamily: fonts.default,
  },
  scroll: {
    height: '91%',
  },
  search: {
    justifyContent: 'center',
    marginBottom: 20,
  },
  searchPic: {
    position: 'absolute',
    right: 10,
  },
});
