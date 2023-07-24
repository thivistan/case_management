
import styles from './styles';
import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity } from 'react-native';

const renderEventScreen = () => {

  const [currentMonth, setCurrentMonth] = useState('July');
  const [showEventScreen, setShowEventScreen] = useState(false);
  const [title, setTitle] = useState('');
  const [selectedKey, setSelectedKey] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [repeatWeekly, setRepeatWeekly] = useState(false);

    const handleSaveEvent = () => {
        // Logic for saving the event
        setShowEventScreen(false);
      };

    const renderEventKey = (label, color) => (
        <View style={styles.eventKey}>
          <View style={[styles.eventKeyCircle, { backgroundColor: color }]} />
          <Text style={styles.eventKeyLabel}>{label}</Text>
        </View>
      );

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

export default renderEventScreen;