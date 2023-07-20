import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import UserProfileAvatar from '../../../components/UserProfileAvatar';
import { useNavigation } from '@react-navigation/native';
import ProfileScreenText from '../../../components/UserProfileFields';
import ThaddeusHorizontalSVG from '../../../assets/images/thaddeus_logo_horizontal.svg';

// Create the UserProfileScreen component that uses the route prop to return the selected image from edit profile screen
const UserProfileScreen = ({ route }) => {

  const selectedImage = route.params ? route.params.selectedImage : null;
  // use the useNavigation hook to acess the navigation object
  // returns the navigation prop of the screen inside it
  const navigation = useNavigation();

  const navigateToEditScreen = () => {
      navigation.navigate('Edit Profile'); 
      };

    return (
    <View style={styles.profileContainer}>
      <View style={styles.header}>
      <UserProfileAvatar imageSource={selectedImage}/>
      </View>
      <Text style={styles.text}>Welcome Syuzanna</Text>
      <ProfileScreenText/>
      <TouchableOpacity>
      <FontAwesome name="camera" size={30} style={{ left: 68, bottom: 390 }}
      onPress={navigateToEditScreen}
      />
      </TouchableOpacity>
      <ThaddeusHorizontalSVG
      height={100}
      width={'100%'}
      fill='black'
      style={styles.logo}
      />
      </View>
      
       )
     }
// Styling the UserProfile Screen
const styles = StyleSheet.create({

  profileContainer: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    alignItems: 'center',
    paddingTop: 2
  },

  iconStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    backgroundColor: '#ADD8E6',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    height: '20%',
    width: '100%',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Montserrat-Black',
    fontSize: 20,
    marginBottom: 45
  },
  logo:{
    marginTop: 55,
    right: 12
  }
})

export default UserProfileScreen;