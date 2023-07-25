
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import MonthlyCalendar from './MonthlyCalendar';
import styles from './styles';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { ScrollView } from 'react-native-gesture-handler';

const Spacer = ({ size }) => <View style={{ width: size, height: size }} />;

const CalendarScreen = () => {
  const navigation = useNavigation();
  return (

    <View style={styles.container}>
       <ScrollView>
    {/* Header */}
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>New Event</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Event')}>
        <Text style={styles.addButton} >+</Text>
      </TouchableOpacity>
      </View>
    
      <MonthlyCalendar />
     
      <View style={styles.weeklyRemindersContainer}>
        
      <Spacer size={30} />
        <Text style={styles.weeklyRemindersText}>
          Weekly Reminders:
        </Text>
        
      </View>
      </ScrollView>
</View>
        
  );

  };

export default CalendarScreen;
