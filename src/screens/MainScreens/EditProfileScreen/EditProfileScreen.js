import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import UserProfileAvatar from '../../../components/UserProfileAvatar';
import ThaddeusHorizontalSVG from '../../../assets/images/thaddeus_logo_horizontal.svg';

// Create the EditProfileScreen component that user will navigate to from the UserProfileScreen
const EditProfileScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Create a function that uses expo's ImagePicker Library which allows the user to access their photos from their phone
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    // If the user doesn't select an image they get an alert
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert('You did not select an image!');
    }
  };
  // After user selects an image and presses the "Done" button, they get navigated back to the user profile and sets the photo to that screen
  const onPressButton = () => {
    navigation.navigate('User Profile', { selectedImage : selectedImage });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <UserProfileAvatar imageSource={selectedImage} />
      </View>
      <View style={styles.button1}>
        <TouchableOpacity onPress={pickImageAsync}>
          <Text style={styles.buttonText}>CHOOSE PHOTO</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button2}>
        <TouchableOpacity onPress={onPressButton}>
          <Text style={styles.buttonText}>DONE</Text>
        </TouchableOpacity>
      </View>
      <ThaddeusHorizontalSVG
      height={100}
      width={'100%'}
      fill='black'
      style={styles.logo}
      />
    </View>
  );
};

// Styling the Edit Screen
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
  },
  button1: {
    height: 40,
    width: 160,
    borderRadius: 10,
    backgroundColor: '#0082cb',
    marginTop: 200,
    right: 0,
    alignItems: 'center',
  },
  button2: {
    height: 40,
    width: 160,
    borderRadius: 10,
    backgroundColor: '#0082cb',
    marginTop: 50,
    right: 0,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontFamily: 'Arial',
    fontSize: 16,
    marginTop: 10
  },
  logo:{
    marginTop: 135,
    right: 12
  }
});

export default EditProfileScreen;
