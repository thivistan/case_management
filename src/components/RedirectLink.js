import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors, globalStyles } from '../global';
import { openApp } from '../functions/openApp';

/**
 * Component to represent a link that redirect (to a browser).
 * @param {Object} props Component props
 * @param {String} props.title Contains human-readable title of the link
 * @param {String} props.url Contains the url to redirect the user
 */
const RedirectLink = ({ title, url }) => {
  return (
    <TouchableOpacity
      style={[styles.button, globalStyles.shadow]}
      onPress={() => openApp(url, 'browser')}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  text: {
    color: colors.primary,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 13,
    display: 'flex',
    textAlign: 'center',
    paddingBottom: 11,
  },
});

export default RedirectLink;
