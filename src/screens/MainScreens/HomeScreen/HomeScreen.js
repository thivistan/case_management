import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
//import { IMAGENAME } from './assets/images/thaddeus_logo.jpg';

import { FlatListComponent, StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  StylesSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  FlatList,
} from 'react-native';
import { ScreenContainer } from 'react-native-screens';

export default function HomeScreen() {
  //Handles redirection to the links
  const handleButtonClick1 = () => {
    // Navigate to a different link
    Linking.openURL('https://www.linkedin.com/company/the-thaddeus-foundation/');
  };

  const handleButtonClick2 = () => {
    // Navigate to a different link
    Linking.openURL('https://www.facebook.com/thaddeusresoursecenter');
  };

  const handleButtonClick3 = () => {
    // Navigate to a different link
    Linking.openURL('https://www.instagram.com/thaddeusresourcecenter/');
  };
  const handleButtonClick4 = () => {
    // Navigate to a different link
    Linking.openURL(`tel:${9095992111}`);
  };
  const handleButtonClick5 = () => {
    // Navigate to a different link
    Linking.openURL('mailto:info@thaddeus.org?subject=&body=');
  };

  //images for slides
  const images = [
    require('../../../assets/images/ImageSlide1.png'),
    require('../../../assets/images/ImageSlide2.png'),
    require('../../../assets/images/ImageSlide3.png'),
    require('../../../assets/images/ImageSlide4.png'),
    require('../../../assets/images/ImageSlide5.png'),
    require('../../../assets/images/ImageSlide6.png'),
    require('../../../assets/images/ImageSlide7.png'),
    require('../../../assets/images/ImageSlide8.png'),
  ];

  //Appointments
  const [appointments, setAppointments] = useState([
    { date: '10/06/2022', time: '10:30 AM', location: 'Thaddeus Resource Center', key: '1' },
    { date: '10/06/2022', time: '10:30 AM', location: 'Thaddeus Resource Center', key: '2' },
    { date: '10/06/2022', time: '10:30 AM', location: 'Thaddeus Resource Center', key: '3' },
    { date: '10/06/2022', time: '10:30 AM', location: 'Thaddeus Resource Center', key: '4' },
    { date: '10/06/2022', time: '10:30 AM', location: 'Thaddeus Resource Center', key: '5' },
    { date: '10/06/2022', time: '10:30 AM', location: 'Thaddeus Resource Center', key: '6' },
    { date: '10/06/2022', time: '10:30 AM', location: 'Thaddeus Resource Center', key: '7' },
    { date: '10/06/2022', time: '10:30 AM', location: 'Thaddeus Resource Center', key: '8' },
    { date: '10/06/2022', time: '10:30 AM', location: 'Thaddeus Resource Center', key: '9' },
  ]);
  const [fontsLoaded] = useFonts({
    'Montserrat-Black': require('../../../assets/fonts/Montserrat-Black.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const Spacer = ({ size }) => <View style={{ width: size, height: size }} />;

  return (
    /*Header*/
    <View style={{ flex: 1, marginTop: -5, backgroundColor: 'lightblue' }}>
      <ScrollView>
        <Image
          style={{ width: 200, height: 100, resizeMode: 'contain', alignSelf: 'center' }}
          source={require('../../../assets/images/thaddeus_logo.jpg')}
        />

        <Text style={{ fontSize: 10, fontWeight: 'bold', alignSelf: 'center' }}>
          RESTORE HOPE, INSPIRE GROWTH, and EMPOWER GIRLS & WOMEN
        </Text>
        {/* Header */}

        {/* Carousel Images*/}
        <View>
          <ImageCarousel images={images} />
        </View>
        <Spacer size={30} />
        {/* Carousel Images*/}

        <View
          style={{
            flex: 1,
            paddingHorizontal: 25,
            backgroundColor: 'white',
            flexDirection: 'column',
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              top: 0,
              position: 'absolute',
              paddingHorizontal: 18,
            }}
          >
            {/* Upcoming Appointments */}
            <Text
              style={{
                fontFamily: 'Montserrat-Black',
                fontSize: 16,
              }}
            >
              Upcoming Appointments...
            </Text>

            <View
              style={{
                height: 150, // Set a fixed height for scrolling
                backgroundColor: '#00BFFF',
                marginTop: 20,
                width: '135%',
                borderRadius: 25,
              }}
            >
              <Spacer size={30} />

              <ScrollView>
                <FlatList
                  style={{ height: 100 }}
                  data={appointments}
                  keyExtractor={(item) => item.key}
                  renderItem={({ item }) => (
                    <View
                      style={{ marginTop: 10, marginBottom: 10, alignItems: 'center' }}
                      key={item.key}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: '600',
                          color: 'white',
                          fontFamily: 'Montserrat-Black',
                        }}
                      >
                        {item.date} - {item.time} - {item.location}
                      </Text>
                    </View>
                  )}
                />
              </ScrollView>
              {/* End of appointment ScrollView*/}

              <Spacer size={30} />
            </View>
          </View>
        </View>

        {/*Image of Thaddeus states*/}
        <Spacer size={80} />
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            alignSelf: 'center',
            top: 80,
          }}
          source={require('../../../assets/images/ThaddeusStats.png')}
        />
      </ScrollView>

      {/*Footer with socials and contact info */}
      <View
        style={{
          backgroundColor: 'white',

          flexDirection: 'row',

          justifyContent: 'space-between',

          alignItems: 'flex-end',
        }}
      >
        <View
          style={{ justifyContent: 'center', flexDirection: 'row', paddingLeft: 30, padding: 10 }}
        >
          <TouchableOpacity onPress={handleButtonClick2} style={{ width: 40, height: 40 }}>
            <Image
              source={require('../../../assets/images/facebookicon.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleButtonClick1}
            style={{ width: 40, height: 40, paddingLeft: 30 }}
          >
            <Image
              source={require('../../../assets/images/linkdinicon.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleButtonClick3}
            style={{ width: 40, height: 40, paddingLeft: 60 }}
          >
            <Image
              source={require('../../../assets/images/instagramicon.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignitems: 'flex-end',
            paddingBottom: 10,
          }}
        >
          <Text onPress={handleButtonClick4} style={{ fontSize: 14 }}>
            (909) 599-2111
          </Text>
          <Text style={{ fontSize: 5 }} />
          <Text onPress={handleButtonClick5} style={{ fontSize: 14, paddingRight: 10 }}>
            info@thaddeus.org
          </Text>
        </View>
      </View>
    </View>
    //  End of Footer
  );
}
