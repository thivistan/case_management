// TODO:
// Footer

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MapList from './MapList';
import Dropdown from '../../../components/Dropdown';

const colorPrimary = '#00BFFF';

/**
 * Component to display the health service screen, including the search bar and map.
 * @param {Object} props Component props
 * @param {Object} props.navigation Helps with navigating to the filter screen.
 */
export default function HealthServicesScreen({ navigation }) {

  const [category, setCategory] = useState(null);

  const categoryData = [
    { 
      label: 'Medical Care',
      url: 'https://211la.org/resources/search?keyword=Healthcare%20%3E%20Medical%20Care%20%281018%29&landing=1&keyword_hidden=Healthcare%20%3E%20Medical%20Care%20%281018%29&website_categorization=1',
      locations: [
        {
          name: 'Parktree Community Health Center',
          address: '750 S Park Ave, Pomona, CA 91766',
          lat: 34.052825,
          lon: -117.753981,
          phone: '(909) 630-7196',
          hours: '8am - 5pm',
        },
      ]
    },
    { 
      label: 'Dental Care',
      url: 'https://211la.org/resources/search?keyword=Healthcare%20%3E%20Dental%20Care%20%28171%29&landing=1&keyword_hidden=Healthcare%20%3E%20Dental%20Care%20%28171%29&website_categorization=1',
      locations: [
        {
          name: 'Sierra Dental',
          address: '1301 W Arrow Hwy # 120, San Dimas, CA 91773',
          lat: 34.10689608557657,
          lon: -117.83313065146875,
          phone: '(909) 592-8338',
          hours: '9am - 5pm',
        },
        {
          name: 'Children\'s Choice Pediatric Dental Care',
          address: '641 W Rte 66 Suite E, Glendora, CA 91740',
          lat: 34.129022989859216,
          lon: -117.87596740002745,
          phone: '(626) 914-7645',
          hours: '9am - 5pm',
        },
      ]
    },
    { 
      label: 'Women\'s Healthcare',
      url: 'https://211la.org/resources/search?keyword=Healthcare%20%3E%20Womens%20Health%20Care%20%281497%29&landing=1&keyword_hidden=Healthcare%20%3E%20Womens%20Health%20Care%20%281497%29&website_categorization=1',
      locations: [
        {
          name: 'Woodglen Medical Group',
          address: '315 E Rte 66, Glendora, CA 91740',
          lat: 34.12922, 
          lon: -117.860739,
          phone: '(626) 963-4124',
          hours: '8am - 5pm',
        },
      ]
    },
    { 
      label: 'Mental Health/Substance Use Disorder',
      url: 'https://211la.org/resources/search?keyword=Healthcare%20%3E%20Mental%20Health/%20Substance%20Use%20Disorder%20%283240%29&landing=1&keyword_hidden=Healthcare%20%3E%20Mental%20Health/%20Substance%20Use%20Disorder%20%283240%29&website_categorization=1',
      locations: [
        {
          name: 'Thaddeus Resource Center',
          address: '2621 Damien Ave La Verne, CA 91750',
          lat: 34.108229,
          lon: -117.787987,
          phone: '(909) 599-2111',
          hours: 'Mon-Fri 9am - 8pm',
        },
        {
          name: 'Tri City Mental Health Center',
          address: '2008 N Garey Ave, Pomona, CA 91767',
          lat: 34.08276, 
          lon: -117.752347,
          phone: '(909) 623-6131',
          hours: '8am - 5pm',
        },
        {
          name: 'Pacific Clinics',
          address: '790 E Bonita Ave, Pomona, CA 91767',
          lat: 34.095627, 
          lon: -117.737271,
          phone: '(909) 625-7207',
          hours: 'Mon-Fri 9am - 5pm',
        },
        {
          name: 'Ettie Lee Youth & Family Services',
          address: '160 E Holt Ave #B, Pomona CA, 91767',
          lat: 34.062265231026736, 
          lon: -117.74896427607543,
          phone: '(909) 620-2521',
          hours: 'Mon-Fri 8am - 5pm',
        },
        {
          name: 'Stigma Free Therapy Network',
          address: '157 N Glendora Ave #223, Glendora, CA 91741',
          lat: 34.13757114499032, 
          lon: -117.86567461165349,
          phone: '(626) 335-6425',
          hours: 'Open Mon-Sat',
        },
      ]
    },
    { 
      label: 'Mental Health Facilities',
      url: 'https://211la.org/resources/search?keyword=Healthcare%20%3E%20Mental%20Health/%20Substance%20Use%20Disorder%20%283240%29&landing=1&keyword_hidden=Healthcare%20%3E%20Mental%20Health/%20Substance%20Use%20Disorder%20%283240%29&website_categorization=1',
      locations: [
        {
          name: 'Behavioral Health Services',
          address: '2180 Valley Blvd, Pomona, CA 91768',
          lat: 34.060674,
          lon: -117.790636,
          phone: '(909) 865-2336',
          hours: '8am - 5pm',
        },
        {
          name: 'Inland Valley Care and Rehab Center',
          address: '250 W Artesia St, Pomona, CA 91768',
          lat: 34.077,
          lon: -117.754672,
          phone: '(909) 623-7100',
          hours: '8am - 8pm',
        },
        {
          name: 'Prototypes - Outpatient Behavioral Health Treatment and Community Services Center',
          address: '1000 N. Alameda St, Ste. 390 Los Angeles, CA 90012',
          lat: 34.059351,
          lon: -118.236611,
          phone: '(213) 542-3838',
          hours: 'Mon-Fri 8am - 5pm',
        },
      ]
    },
    { 
      label: 'Screenings/Tests',
      url: 'https://211la.org/resources/search?keyword=Healthcare%20%3E%20Screenings/Tests%20%28904%29&landing=1&keyword_hidden=Healthcare%20%3E%20Screenings/Tests%20%28904%29&website_categorization=1',
      locations: [
        {
          name: 'Park Avenue Optometry',
          address: '300 S Park Ave, Pomona, CA 91766',
          lat: 34.056377,
          lon: -117.753922,
          phone: '(909) 622-3531',
          hours: '9am - 5pm',
        },
      ]
    },
  ];

  const openLink = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log('Opening the link is not supported on this device.');
      }
    } catch (error) {
      console.error('An error occurred while opening link:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Dropdown
        label={category ? category.label : 'Choose Category...'}
        data={categoryData}
        onSelect={setCategory}
        styles={dropdownStyles}
      />

      {category ? <MapList locations={category.locations} /> : <Text style={{marginTop:20, textAlign:'center', fontWeight:'bold'}}>Please choose a category.</Text>}

      <View style={styles.footer}>
        {
          category && 
          <TouchableOpacity
            onPress={() => openLink(category.url)}
            style={styles.linkBtn}
          >
            <Text style={styles.linkText}>
              {`Find More ${category.label} Resources `}
              <Icon name="open" size={17}/>
            </Text>
            
          </TouchableOpacity>
        }
        <TouchableOpacity
          onPress={() => openLink('https://211la.org/resources/subcategory/healthcare')}
          style={styles.linkBtn}
        >
          <Text style={styles.linkText}>
            {`See All Healthcare Resources `}
            <Icon name="open" size={17}/>
          </Text>
        </TouchableOpacity>
      </View>

      {/* <Text>Medical Care</Text>
      <Text>Park Tree - (909)-630-7196 Hours: 8 am-5 pm </Text>

      <Text>Dental Care</Text>
      <Text>Sierra Dental - (909) 592-8338 Hours: 9 am-5 pm</Text>
      <Text>Children's Choice Pediatric Dental Care- (626) 914-7645 Hours: 9 am-5 pm </Text>

      <Text>Womens Health Care</Text>
      <Text>Woodglen Medical Group- (626) 963-4124 Hours: 8 am-5 pm</Text>

      <Text>Mental Health/Substance Use Disorder</Text>
      <Text>Thaddeus Resource Center - (909) 599-2111 Hours: 9 am-8 pm</Text>
      <Text>Tri City Mental Health Center- (909) 623-6131 Hours: 8 am-5 pm </Text>
      <Text>Pacific Clinics- (909) 625-7207 Hours: 9 am- 5 pm </Text>
      <Text>Ettie Lee Youth & Family Services- (909) 620-2521 Hours: 8 am-5 pm </Text>
      <Text>Stigma Free - (626) 335-6425</Text>

      <Text>Mental Helath Facilities</Text>
      <Text>Behavioral Health Services - (909) 865-2336 Hours: 8 am-5 pm </Text>
      <Text>Inland Valley Care and Rehab Center - (909) 623-7100 Hours: 8 am- 8 pm </Text>
      <Text>
        Prototypes - Outpatient Behavioral Health Treatment and Community Services Center- (213)
        542-3838
      </Text>

      <Text>Screenings/Tests</Text>
      <Text>Park Avenue Optometry- (909) 622-3531 Hours: 9 am- 5 pm </Text> */}
    </View>
  );
};

const baseSize = Platform.OS === 'android' ? 12 : 14;

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  filterBtn: {
    zIndex: 1,
    elevation: 1,
    right: '-80%',
    top: 20,
  },
  filterBtnText: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#47d7f2',
    alignSelf: 'stretch',
    borderRadius: 150 / 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: 'white',
  },
  search: {
    justifyContent: 'center',
  },
  searchPic: {
    position: 'absolute',
    right: 10,
  },
  text: {
    margin: 10,
    color: '#47d7f2',
    fontWeight: 'bold',
  },

  linkBtn: {
    backgroundColor: colorPrimary,
    padding: baseSize * 1.6,
    marginBottom: baseSize * 0.8,
    borderRadius: 10,
  },

  linkText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },

  footer: {
    flex: 1,
  },

});

const dropdownStyles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 2,
    borderColor: '#00BFFF',
    marginVertical: 0,
    // marginHorizontal: baseSize * 1.4,
    paddingHorizontal: baseSize * 0.7,
    paddingVertical: baseSize * 0.65,
    height: baseSize * 3,
  },

  btnText: {
    flex: 1,
    textAlign: 'left',
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: baseSize,
  },

  icon: {
    marginRight: 10,
    fontSize: baseSize * 1.3,
    color: '#00BFFF',
  },

  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    // width: '100%',
    // marginHorizontal: baseSize * 1.4,
    shadowColor: 'gray',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    maxHeight: baseSize * 20,
  },

  overlay: {
    width: '100%',
    height: '100%',
  },

  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1.5,
    borderColor: '#00BFFF',
  },

  itemText: {
    fontSize: baseSize,
    color: '#00BFFF',
    fontWeight: 'bold',
  },
});