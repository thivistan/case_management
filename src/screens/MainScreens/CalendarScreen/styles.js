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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  eventKey: {
    alignItems: 'center',
    marginBottom: 8,
  },
  eventKeyCircle: {
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  eventKeyLabel: {
    color: 'white',
    marginTop: 4,
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
    backgroundColor: '#00BFFF',
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
  },
});

export default styles;
