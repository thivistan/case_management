import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ResourcePage from '../../../components/ResourcePage';
import { auth, db } from '../../../firebase/firebase.js';
import { useNavigation } from '@react-navigation/native';
import HomeScreenStack from '../../../Navigation/HomeScreenStack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import Spacer from '../../../components/Spacer';
import { Ionicons } from '@expo/vector-icons';
// import CalendarDate from './CalendarDate';

export default function HomeScreen() {
  const navBarButtonSize = 40;
  const calendarNavButtonSize = 30;

  const navigation = useNavigation();
  const [inspirationalQuote, setInspirationalQuote] = useState('');
  const [showAppointmentCard, setShowAppointmentCard] = useState(false);

  const [appointmentDate, setAppointmentDate] = useState('1-1-2000');

  function updateQuote(updatedQuote) {
    setInspirationalQuote(updatedQuote);
  }

  const getInspirationalQuote = () => {
    // get a random number
    const randomNumber = Math.floor(Math.random() * 3); // replace 2 w total number of quotes

    // read database inspirational quote
    var quoteDbRef = db.ref('inspirational_quotes/' + randomNumber);

    // extract data from db reference and update the current quote
    quoteDbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      updateQuote(data);
    });
  };

  const getUserID = () => {
    return auth.currentUser.uid;
  };

  function Appointment(props) {
    return;
  }

  // search firebase for appointments in the next 3 weeks
  function getUpcomingAppointments() {}

  function CalendarDate(props) {
    return (
      <View
        style={{
          borderColor: 'green',
          borderWidth: 1,
          height: '100%',
          width: 80,
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            height: '100%',
            width: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            // fetch appointment data from db

            // pass it to state

            // show the appointment card
            // find a way to make it so that clicking only the same button will
            // open and close the appointment card
            setShowAppointmentCard(!showAppointmentCard);
          }}
        >
          <Text>{props.date}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function AppointmentCard(props) {
    return (
      <View
        style={{
          borderColor: 'black',
          borderWidth: 1,
          width: '100%',
          height: '20%',
        }}
      >
        <Text>Appointment: {props.appointmentType}</Text>
        <Text>Date: {props.date}</Text>
        <Text>Staff Member: {props.staffMember}</Text>
      </View>
    );
  }

  // the empty array means at the end of the
  // function will only be called once
  useEffect(() => {
    getInspirationalQuote();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      {/* news button */}
      <View style={styles.topNavArea}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('NotificationScreen');
            }}
          >
            <Ionicons
              name="newspaper-outline"
              size={navBarButtonSize}
              style={styles.navBarButton}
            ></Ionicons>
          </TouchableOpacity>
        </View>
        {/* notifications button */}
        <View>
          <TouchableOpacity>
            <Ionicons
              name="notifications-outline"
              size={navBarButtonSize}
              style={styles.navBarButton}
            ></Ionicons>
          </TouchableOpacity>
        </View>
      </View>

      <Spacer height={20} width={100} borderColor={'red'} borderWidth={1} />

      {/* upcoming appointments calendar */}
      <View style={styles.upcomingCalendarArea}>
        <View style={styles.calendarNavBar}>
          <TouchableOpacity style={styles.calendarNavButton}>
            <Ionicons name="chevron-back-outline" size={calendarNavButtonSize}></Ionicons>
          </TouchableOpacity>

          <Spacer height={'100%'} width={'70%'} borderColor={'red'} borderWidth={1} />

          <TouchableOpacity style={styles.calendarNavButton} onClick={() => {}}>
            <Ionicons name="chevron-forward-outline" size={calendarNavButtonSize}></Ionicons>
          </TouchableOpacity>
        </View>

        {/* date selection area */}
        <View style={styles.dateSelectionArea}>
          <CalendarDate date={'9'} />
          <CalendarDate date={'10'} />
          <CalendarDate date={'11'} />
        </View>
      </View>

      <Spacer height={20} width={100} borderColor={'red'} borderWidth={1} />

      {showAppointmentCard && <AppointmentCard />}

      {/* inspirtaional quote section */}
      <View style={styles.inspirationalQuoteArea}>
        <Text>{inspirationalQuote}</Text>
      </View>
    </View>
  );
}
