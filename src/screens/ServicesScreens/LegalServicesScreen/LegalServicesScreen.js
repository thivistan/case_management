import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MapList, { openApp } from '../../../components/MapList';
import Dropdown from '../../../components/Dropdown';

const colorPrimary = '#00BFFF';

/**
 * Legal Services Screen component. Displays resources in each category.
 * @param {Object} props Component props
 */
export default function LegalServicesScreen() {
  const categoryData = [
    {
      label: 'Legal Aid & Counseling',
      url: 'https://211la.org/resources/search?keyword=Legal%20Services%20%3E%20Legal%20Aid%20%26%20Counseling%20%282201%29&landing=1&keyword_hidden=Legal%20Services%20%3E%20Legal%20Aid%20%26%20Counseling%20%282201%29&website_categorization=1',
      locations: [
        {
          name: 'Social Advocacy Group',
          phone: '(888) 407-4101',
          email: 'justice@advocacyproject.org',
          website: 'http://advocacyproject.org/',
        },
      ],
    },
    {
      label: 'Immigration',
      url: 'https://211la.org/resources/subcategory/immigration',
      locations: [
        {
          name: 'Immigration Center for Women and Children',
          address: '634 South Spring St. Ste. 727 Los Angeles, CA 90014',
          lat: 34.045003,
          lon: -118.251456,
          phone: '(213) 6154-1165',
          hours: '9am - 5pm',
        },
      ],
    },
  ];

  const [category, setCategory] = useState(categoryData[0]);

  return (
    <View style={styles.container}>
      <Dropdown
        label={category.label}
        data={categoryData}
        onSelect={setCategory}
        styles={dropdownStyles}
      />

      <MapList locations={category.locations} />

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => openApp(category.url, 'browser')} style={styles.linkBtn}>
          <Text style={styles.linkText}>
            {`Find More ${category.label} Resources `}
            <Icon name="open" size={13} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            openApp('https://211la.org/resources/subcategory/legal-services', 'browser')
          }
          style={styles.linkBtn}
        >
          <Text style={styles.linkText}>
            {`See All Legal Resources `}
            <Icon name="open" size={13} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const baseSize = Platform.OS === 'android' ? 12 : 14;

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },
  linkBtn: {
    backgroundColor: colorPrimary,
    padding: baseSize * 1.4,
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
    marginBottom: 10,
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
