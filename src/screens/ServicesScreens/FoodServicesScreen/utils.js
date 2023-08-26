import * as Location from 'expo-location';

// function to get current user's location
export const userLocation = async () => {
  // handle ASKING for user's location
  let { status } = await Location.requestForegroundPermissionsAsync();
  status !== 'granted' && setPermissionError('Permission to access location was denied')

  // get the location after permission granted, then log
  let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true })
  console.log("This is the user's current location: ")
  console.log(location)
}