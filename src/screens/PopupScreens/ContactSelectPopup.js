import React from 'react'
import { Button, View } from 'react-native';

function ContactSelectPopup(props) {
  return (props.trigger)?(
    <View>
        <View>
            <Button title='close'>Close</Button>
            {props.children}
        </View>
    </View>
  ) : "";
}

export default ContactSelectPopup