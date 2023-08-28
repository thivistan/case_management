import * as Location from 'expo-location';
import { Platform, Linking } from 'react-native';
const apiKey = '59pe61cOEUP3lEeNtRozneKwruo20IkW';
const foodRestaurantCode = '7315';

// function to get current user's location
export const userLocation = async (setPermissionError) => {
  // handle ASKING for user's location
  let { status } = await Location.requestForegroundPermissionsAsync();
  status !== 'granted' && setPermissionError('Permission to access location was denied')

  // get the location after permission granted, then log
  let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true })
  console.log("This is the user's current location: ")
  console.log(location)
}

export const searchFoodServicesByLocation = async (location) => {
  // encodeURI == replaces spaces with '%20'
  const encodedlocation = encodeURI(location);

  // fetch api:
  const res = await fetch(`https://api.tomtom.com/search/2/search/${encodedlocation}.json?key=${apiKey}&categorySet=${foodRestaurantCode}&limit=20`)
  const data = await res.json()
  return data;
}

// Open external map app with given lat and lon
export const openMap = async (lat, lon, name) => {
  const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
  const latLng = `${lat},${lon}`;
  const label = name;
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`
  });

  try {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Opening the map app is not supported on this device.");
    }
  } catch (error) {
    console.error("An error occurred while opening the map app:", error);
  }
}