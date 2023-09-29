import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Linking, Button } from 'react-native';
import { color } from 'react-native-reanimated';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const InfoButton = () => {
    switch (currentIndex) {
      case 0:
        Linking.openURL('https://www.thaddeus.org/women-blogs');
        break;
      case 1:
        Linking.openURL('https://www.thaddeus.org/self-care-blogs');
        break;
      case 2:
        Linking.openURL('https://www.thaddeus.org/youth-blogs');
        break;
      case 3:
        Linking.openURL('https://www.thaddeus.org/student-blogs');
        break;
      case 4:
        Linking.openURL('https://www.thaddeus.org/mom-blogs');
        break;
      case 5:
        Linking.openURL('https://www.thaddeus.org/human-resources-blogs');
        break;
      case 6:
        Linking.openURL('https://www.thaddeus.org/business-blogs');
        break;
      case 7:
        Linking.openURL('https://www.thaddeus.org/tech-blogs');
        break;
      default:
        Linking.openURL('https://www.thaddeus.org/student-blogs');
        break;
    }
  };
  const GetButtonTitle = () => {
    switch (currentIndex) {
      case 0:
        return 'Women';
        break;
      case 1:
        return 'Self-Care';
      case 2:
        return 'Youth';
        break;
      case 3:
        return 'Students';
        break;
      case 4:
        return 'Moms';
        break;
      case 5:
        return 'Human Resources';
        break;
      case 6:
        return 'Buisness';
        break;
      case 7:
        return 'Tech';
        break;
      default:
        return 'button';
    }
  };
  const DisplayText = (props) => {
    return (
      <Text style={{ color: '#e00f84', alignSelf: 'center', fontWeight: 'bold', fontSize: 13 }}>
        {props.text}
      </Text>
    );
  };
  return (
    <View style={styles.carousel}>
      <Image source={images[currentIndex]} style={styles.image} />

      <View style={styles.carouselControls}>
        <TouchableOpacity onPress={goToPrevSlide}>
          <Text style={styles.controlText}>{'<'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={InfoButton}>
          <View
            style={{
              resizeMode: 'contain',
              backgroundColor: 'lightblue',
              borderRadius: 10,
              padding: 10,
              opacity: 0.8,
            }}
          >
            <DisplayText text={GetButtonTitle()} />
          </View>
        </TouchableOpacity>
        {/* <Button onPress={InfoButton} title={GetButtonTitle()} style={{ width: 100, height: 50 }} /> */}

        <TouchableOpacity onPress={goToNextSlide}>
          <Text style={styles.controlText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    width: '100%',
    height: 180,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '150%',
    //   resizeMode: 'cover',
  },
  carouselControls: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    bottom: 10,
  },
  controlText: {
    fontSize: 20,
    color: 'white',
    shadowOpacity: 10,
    shadowColor: 'black',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
});

export default ImageCarousel;
