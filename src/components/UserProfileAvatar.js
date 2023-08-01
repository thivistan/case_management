import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

// Create an Avatar component for the UserProfileScreen using an image "avatar.jpg" in assets folder
//{imageSource prop determines the source of the image to be displayed. If a source is provided will use it or use avatar}
const UserProfileAvatar = ({ imageSource }) => {
  return (
    <View style={styles.container}>
      {imageSource ? (
        <Image source={{ uri: imageSource }} style={styles.image} />
      ) : (
        <Image
          source={require('../assets/images/avatar.jpg')}
          style={styles.image}
        />
      )}
    </View>
  );
};

// Styling the avatar
const styles = StyleSheet.create({
  container: {
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 20, 
    bottom: 30
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
});
export default UserProfileAvatar;
