import React from 'react';
import { View } from 'react-native';

export default function Spacer(props) {
  return (
    <View
      height={props.height}
      width={props.width}
      borderColor={props.borderColor}
      borderWidth={props.borderWidth}
    />
  );
}
