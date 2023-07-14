import React from 'react';
import ImageCarousel from './ImageCarousel';
//import { IMAGENAME } from './assets/images/thaddeus_logo.jpg';

import {
  StylesSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function HomeScreen() {
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

  
    const images = [
    //   require('./images/image1.jpg'),
    //   require('./images/image2.jpg'),
    //   require('./images/image3.jpg'),
    
    // "https://uploads-ssl.webflow.com/61a33234ec52cc692c647c76/648be1ee8061630c1480888f_Relaxation%20Tips-p-500.jpg",

    // "https://uploads-ssl.webflow.com/61a33234ec52cc692c647c76/6459303685aa7e0b8b3c6134_GetImage%20(5)-p-500.jpg",

    // "https://uploads-ssl.webflow.com/61a33234ec52cc692c647c76/64594e0581f8943a366483b9_94c0803c-7754-4a3f-80a9-4c596a64b70e-p-500.jpg",

    // "https://uploads-ssl.webflow.com/61a33234ec52cc692c647c76/6459206a39921d2284c4a0d3_prayer-p-500.jpg"

    require('../../../assets/images/ImageSlide1.png'),
    require('../../../assets/images/ImageSlide2.png'),
    require('../../../assets/images/ImageSlide3.png'),
    require('../../../assets/images/ImageSlide4.png'),
    require('../../../assets/images/ImageSlide5.png'),
    require('../../../assets/images/ImageSlide6.png'),
    require('../../../assets/images/ImageSlide7.png')



    ];
  
 
  return (
    <View style={{ flex: 1, marginTop: -5, backgroundColor: 'lightblue' }}>
      <ScrollView>
        <Image
          style={{ width: 200, height: 100, resizeMode: 'contain', alignSelf: 'center' }}
          source={require('../../../assets/images/thaddeus_logo.jpg')}
        />

        <Text style={{ fontSize: 10, fontWeight: 'bold', alignSelf: 'center' }}>
          RESTORE HOPE, INSPIRE GROWTH, and EMPOWER GIRLS & WOMEN
        </Text>

        <View>
        <ImageCarousel images={images} />
        </View>

        <View>
          {/* <Image
            source={{
              uri: 'https://uploads-ssl.webflow.com/61a33234ec52cc692c647c76/648be1ee8061630c1480888f_Relaxation%20Tips-p-500.jpg',
            }}
            style={{ width: '100%', height: 200 }}
        />*/}
          <Image 
            style={{ width: '100%', resizeMode: 'contain', alignSelf: 'center' }}
            source={require('../../../assets/images/ThaddeusStats.png')}
          />
        </View>

        

      </ScrollView>

      <View
        style={{
          backgroundColor: 'white',

          flexDirection: 'row',

          justifyContent: 'space-between',

          alignItems: 'flex-end',
        }}
      >
        <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
          <TouchableOpacity onPress={handleButtonClick2} style={{ width: 30, height: 30 }}>
            <Image
              source={require('../../../assets/images/facebookicon.png')}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleButtonClick1} style={{ width: 30, height: 30 }}>
            <Image
              source={require('../../../assets/images/linkdinicon.png')}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleButtonClick3} style={{ width: 30, height: 30 }}>
            <Image
              source={require('../../../assets/images/instagramicon.png')}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, flexDirection: 'column', alignitems: 'flex-end', marginLeft: 100 }}>
          <Text onPress={handleButtonClick4}>(909) 599-2111</Text>

          <Text onPress={handleButtonClick5}>info@thaddeus.org</Text>
        </View>
      </View>
    </View>
  );
}
