import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import styles from './styles';
import CalendarRepo from './CalendarRepo';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import renderEventScreen from './CalendarRepo';


const MonthlyCalendar = () => {
  const Spacer = ({ size }) => <View style={{ width: size, height: size }} />;
  const [SelectedDate, setSelecteddate] = useState(false);    
  const navigation = useNavigation();
    const handleDayPress = (day) =>    {
        setSelecteddate(day.dateString);    
    };

    const renderEventKey = (label, color) => (
        <View style={styles.eventKey}>
          <View style={[styles.eventKeyCircle, { backgroundColor: color }]} />
          <Text style={styles.eventKeyLabel}>{label}</Text>
        </View>
      );
     
    return (       
        <View style={styles2.container}>

            <View style={styles.eventKeysContainer}>
              
            {renderEventKey('CM Appt', 'green')}
            {renderEventKey('Therapy', 'yellow')}
            {renderEventKey('Chat', 'red')}
            {renderEventKey('Tasks', 'orange')}
            {renderEventKey('Support Group', 'purple')}
            </View>

          <Text style={styles2.selectedDate}>Monthly Calendar</Text>
          <Spacer size={30} />
          
            <Calendar
            style={styles2.calendar}
            contentContainerStyle={styles2.calendarContainer}
                    
              markedDates={{
                [SelectedDate]: {
                  selected: true,
                  selectedColor: 'blue',
                },
              }}

              onDayPress= {handleDayPress}
              // onDayLongPress= {handleDayPress2(SelectedDate)}
                           
            />
            
          {SelectedDate && (
            <View style={styles2.eventContainer}>
              <Text style={styles2.selectedDate}>{SelectedDate}</Text>
              {/* Add event creation form or any other desired functionality */}
                         
            </View>
          )}
        </View>
      );
    };
    
    const styles2 = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      },

      calendarContainer: {
        flexWrap: 10,
       
      },

      calendar: {
        aspectRatio: 0.9,
        resizeMode: 'contain'
      },

      eventContainer: {
        marginTop: 20,
      },

      selectedDate: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
       
      },
    });
    
    export default MonthlyCalendar;
