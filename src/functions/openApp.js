import { Linking } from 'react-native';

/**
 * Function to handle opening various apps on the OS.
 * @param {String} content the content that will be sent to the app
 * @param {String} type the type of app to open
 * @param {String} lat the latitude if opening the map app
 * @param {String} lon the longitude if opening the map app
 */
export const openApp = async (content, type, lat, lon) => {
  let url = content;
  if (type === 'map') {
    const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${lon}`;
    url = Platform.select({
      ios: `${scheme}${content}@${latLng}`,
      android: `${scheme}${latLng}(${content})`,
    });
  } else if (type == 'email') {
    const scheme = Platform.select({ ios: 'message:', android: 'mailto:' });
    url = Platform.select({
      ios: `${scheme}${content}`,
      android: `${scheme}${content}`,
    });
  } else if (type == 'phone') {
    url = `tel:${content}`;
  }

  try {
    await Linking.openURL(url);
    console.log(`Opened URL: ${url}`);
  } catch (error) {
    console.error(`Error opening URL: ${url}`, error);
  }
};
