import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    padding: 20,
    
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    color: '#00BFFF',
  },
  addButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  eventKeysContainer: {
    flex: 1,
    flexDirection: 'row',  
    marginBottom: 20,
    backgroundColor: 'white',
    padding: '5%',
    borderRadius: 50,
    
  },
  eventKey: {
    alignItems: 'center',
    marginBottom: 8,
    fontWeight: 'bold',
    
  },
  eventKeyCircle: {
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  eventKeyLabel: {
    
    fontWeight: 'bold',
    
    fontSize: '10',
    
    padding: 5,
    

    
    
    
  },
  calendarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarArrow: {
    marginHorizontal: 10,
  },
  calendarMonth: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarDate: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginRight: 10,
  },
  calendarDateText: {
    color: 'white',
  },
  weeklyRemindersContainer: {
    marginBottom: 10,
  },
  weeklyRemindersText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
  },

 
  eventScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    padding: 20,
  },

  eventScreenTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },

  eventInput: {
    width: '100%',
    marginBottom: 20,
  },

  boldPlaceholderText: {
    fontWeight: 'bold',
    color: 'lightblue',
  },

  titleContainer: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
  },

  titleRectangle: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
  },

  titleInput: {
    fontSize: 20,
    color: 'lightblue',
  },

  spacing: {
    marginBottom: 10,
  },

  keysSpacing: {
    marginTop: 10,
  },

  notesContainer: {
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 8,
  },

  notesRectangle: {
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 8,
  },

  notesInput: {
    fontSize: 20,
    color: 'lightblue',
  },

  dateContainer: {
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 8,
  },

  dateRectangle: {
    borderRadius: 7,
    backgroundColor: 'white',
    padding: 7,
  },

  dateInput: {
    fontSize: 20,
    color: 'lightblue',
  },

  repeatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  repeatLabel: {
    fontSize: 16,
    color: 'white',
  },

  saveButton: {
    backgroundColor: '#00BFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  saveButtonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;