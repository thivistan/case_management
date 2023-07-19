import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Switch } from 'react-native';
import styles from './styles';

const CalendarScreen = () => {
  const [currentMonth, setCurrentMonth] = useState('July');
  const [showEventScreen, setShowEventScreen] = useState(false);
  const [title, setTitle] = useState('');
  const [selectedKey, setSelectedKey] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [repeatWeekly, setRepeatWeekly] = useState(false);

  // Function to handle going to the previous month
  const handlePreviousMonth = () => {
    const prevMonth = getPreviousMonth(currentMonth);
    setCurrentMonth(prevMonth);
  };

  // Function to handle going to the next month
  const handleNextMonth = () => {
    const nextMonth = getNextMonth(currentMonth);
    setCurrentMonth(nextMonth);
  };

  // Function to handle when a date is pressed
  const handleDatePress = (date) => {
    // Logic for handling when a date is pressed
  };

  // Function to handle adding a new event
  const handleAddEvent = () => {
    setShowEventScreen(true);
  };

  // Function to handle saving the event
  const handleSaveEvent = () => {
    // Logic for saving the event
    setShowEventScreen(false);
  };

  // Function to render an event key component
  const renderEventKey = (label, color) => (
    <TouchableOpacity
      key={label}
      style={[styles.eventKey, selectedKey === label ? styles.eventKeySelected : null]}
      onPress={() => setSelectedKey(label)}
    >
      <View style={[styles.eventKeyCircle, { backgroundColor: color }]} />
      <Text style={styles.eventKeyLabel}>{label}</Text>
    </TouchableOpacity>
  );

  // Function to render the calendar based on the current month
  const renderCalendar = () => {
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

  // Function to get the array of dates for the current month
  const getMonthData = (month) => {
    const monthData = [];
    const daysInMonth = 31; // Replace with the actual number of days in the current month

    for (let i = 1; i <= daysInMonth; i++) {
      monthData.push(i);
    }

    return monthData;
  };

  // Function to get the previous month based on the current month
  const getPreviousMonth = (currentMonth) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const currentMonthIndex = months.findIndex((month) => month === currentMonth);
    const prevMonthIndex = currentMonthIndex === 0 ? 11 : currentMonthIndex - 1;
    return months[prevMonthIndex];
  };

  // Function to get the next month based on the current month
  const getNextMonth = (currentMonth) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const currentMonthIndex = months.findIndex((month) => month === currentMonth);
    const nextMonthIndex = currentMonthIndex === 11 ? 0 : currentMonthIndex + 1;
    return months[nextMonthIndex];
  };

  // Function to render the event screen
  const renderEventScreen = () => {
    return (
      <View style={styles.eventScreen}>
        {/* Page Title */}
        <Text style={styles.eventScreenTitle}>New Event</Text>

        {/* Title */}
        <View style={[styles.eventInput, styles.titleContainer]}>
          <View style={styles.titleRectangle}>
            <TextInput
              style={[styles.titleInput, styles.boldPlaceholderText]}
              placeholder="Title"
              onChangeText={setTitle}
              value={title}
            />
          </View>
        </View>

        {/* Spacing */}
        <View style={styles.spacing} />

        {/* Event Keys */}
        <View style={[styles.eventKeysContainer, styles.keysSpacing]}>
          {renderEventKey('CM Appt', 'green')}
          {renderEventKey('Therapy', 'yellow')}
          {renderEventKey('Chat', 'red')}
          {renderEventKey('Tasks', 'orange')}
          {renderEventKey('Support Group', 'purple')}
        </View>

        {/* Notes */}
        <View style={[styles.eventInput, styles.notesContainer]}>
          <View style={styles.notesRectangle}>
            <TextInput
              style={[styles.notesInput, styles.boldPlaceholderText]}
              placeholder="Notes"
              multiline={true}
              onChangeText={setNotes}
              value={notes}
            />
          </View>
        </View>

        {/* Date */}
        <View style={[styles.eventInput, styles.dateContainer]}>
          <View style={styles.dateRectangle}>
            <TextInput
              style={[styles.dateInput, styles.boldPlaceholderText]}
              placeholder="Date"
              onChangeText={setSelectedDate}
              value={selectedDate}
            />
          </View>
        </View>

        {/* Repeat */}
        <View style={[styles.eventInput, styles.repeatContainer]}>
          <Text style={[styles.repeatLabel, { color: 'white', fontSize: 18 }]}>Repeat:</Text>
          <Switch
            trackColor={{ false: 'gray', true: 'green' }}
            thumbColor={repeatWeekly ? 'white' : 'gray'}
            value={repeatWeekly}
            onValueChange={setRepeatWeekly}
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveEvent}>
          <Text style={styles.saveButtonText}>Create</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      {!showEventScreen && (
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>New Event</Text>
          <TouchableOpacity onPress={handleAddEvent}>
            <Text style={styles.addButton}>+</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Render Event Screen */}
      {showEventScreen ? (
        renderEventScreen()
      ) : (
        <>
          {/* Event Keys */}
          <View style={styles.eventKeysContainer}>
            {renderEventKey('CM Appt', 'green')}
            {renderEventKey('Therapy', 'yellow')}
            {renderEventKey('Chat', 'red')}
            {renderEventKey('Tasks', 'orange')}
            {renderEventKey('Support Group', 'purple')}
          </View>

          {/* Calendar */}
          <View style={styles.calendarContainer}>{renderCalendar()}</View>

          {/* Weekly Reminders */}
          <View style={styles.weeklyRemindersContainer}>
            <Text style={styles.weeklyRemindersText}>Weekly Reminders:</Text>
            {/* Render weekly reminders */}
            {/* Each reminder component */}
          </View>
        </>
      )}
    </View>
  );
};

export default CalendarScreen;
