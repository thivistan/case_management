import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navBarButton: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  topNavArea: {
    borderColor: 'red',
    borderWidth: 1,
    height: '6%',
    width: '100%',
    flexDirection: 'row-reverse',
  },
  inspirationalQuoteArea: {},
  upcomingCalendarArea: {
    borderColor: 'blue',
    borderWidth: 1,
    width: '100%',
    height: '15%',
    flexDirection: 'column',
  },
  calendarNavBar: {
    borderColor: 'green',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  calendarNavButton: {},
  dateSelectionArea: {
    borderColor: 'red',
    borderWidth: 1,
    height: '70%',
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export { styles };
