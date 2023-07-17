import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const CalendarScreen = () => {
  const [currentMonth, setCurrentMonth] = useState('July');

  const handlePreviousMonth = () => {
    const prevMonth = getPreviousMonth(currentMonth);
    setCurrentMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = getNextMonth(currentMonth);
    setCurrentMonth(nextMonth);
  };

  const renderCalendar = () => {
    // Logic to render the calendar based on the current month
    const monthData = getMonthData(currentMonth); // Replace this with logic to get the data for the current month

    return (
      <View>
        {/* Month label */}
        <View style={styles.calendarHeader}>
          <TouchableOpacity onPress={handlePreviousMonth} style={styles.calendarArrow}>
            <Text>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.calendarMonth}>{currentMonth}</Text>
          <TouchableOpacity onPress={handleNextMonth} style={styles.calendarArrow}>
            <Text>{'>'}</Text>
          </TouchableOpacity>
        </View>

        {/* Calendar grid */}
        <View style={styles.calendarGrid}>
          {monthData.map((date, index) => (
            <TouchableOpacity
              key={index}
              style={styles.calendarDate}
              onPress={() => handleDatePress(date)}
            >
              <Text style={styles.calendarDateText}>{date}</Text>
              {/* Render any additional event markers for this date */}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const handleDatePress = (date) => {
    // Logic for handling when a date is pressed
  };

  const getMonthData = (month) => {
    // Here, we are just returning an example array of dates
    const monthData = [];
    const daysInMonth = 31; // Replace with the actual number of days in the current month

    for (let i = 1; i <= daysInMonth; i++) {
      monthData.push(i);
    }

    return monthData;
  };

  const getPreviousMonth = (currentMonth) => {
    // Logic to get the previous month based on the current month
    // Still need to consider edge cases such as switching to the previous year
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonthIndex = months.findIndex((month) => month === currentMonth);
    const prevMonthIndex = currentMonthIndex === 0 ? 11 : currentMonthIndex - 1;
    return months[prevMonthIndex];

    return currentMonth;
  };

  const getNextMonth = (currentMonth) => {
    // Logic to get the next month based on the current month
    // Still need to consider edge cases such as switching to the next year
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonthIndex = months.findIndex((month) => month === currentMonth);
    const nextMonthIndex = currentMonthIndex === 11 ? 0 : currentMonthIndex + 1;
    return months[nextMonthIndex];

    return currentMonth;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>New Event</Text>
        <TouchableOpacity onPress={() => handleAddEvent()}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Event Keys */}
      <View style={styles.eventKeysContainer}>
        {renderEventKey('CM Appt', 'green')}
        {renderEventKey('Therapy', 'yellow')}
        {renderEventKey('Chat', 'red')}
        {renderEventKey('Tasks', 'orange')}
        {renderEventKey('Support Group', 'purple')}
      </View>

      {/* Calendar */}
      <View style={styles.calendarContainer}>
        {renderCalendar()}
      </View>

      {/* Weekly Reminders */}
      <View style={styles.weeklyRemindersContainer}>
        <Text style={styles.weeklyRemindersText}>
          Weekly Reminders:
        </Text>
        {/* Render weekly reminders */}
        {/* Each reminder component */}
      </View>
    </View>
  );
};

const renderEventKey = (label, color) => (
  <View style={styles.eventKey}>
    <View style={[styles.eventKeyCircle, { backgroundColor: color }]} />
    <Text style={styles.eventKeyLabel}>{label}</Text>
  </View>
);

const handleAddEvent = () => {
  // Add event functionality
};

export default CalendarScreen;
