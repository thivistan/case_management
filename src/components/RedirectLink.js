import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors, globalStyles } from '../global';
import { openApp } from '../functions/openApp';

/**
 * Component to represent a link that redirect (to a browser).
 * @param {Object} props Component props
 * @param {Object} props.resource Contains object with resource data.
 */
export default function RedirectLink({ resource }) {
  return (
    <TouchableOpacity
      style={[styles.button, globalStyles.shadow]}
      onPress={() => openApp(resource.link, 'browser')}
    >
      <Text style={styles.text}>{resource.name}</Text>
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