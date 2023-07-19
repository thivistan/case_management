import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
//import './ContactSelectPopup.css';

function ContactSelectPopup(props) {
  return props.trigger ? (
    <View style={styles.outerPopupView}>
      <View style={styles.innerPopupView}>
        <Button title="close" style={styles.closeBtn}>
          Close
        </Button>
        {props.children}
      </View>
    </View>
  ) : (
    ''
  );
}

const styles = StyleSheet.create({
outerPopupView:{
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    backgroundcolor: 'pink',

    display: 'flex',
    justifycontent: "center",
    alignitems: "center",
},

innerPopupView:{
    position: 'relative',
    padding: 'auto',
    width: 100,
    maxwidth: 640,
    backgroundcolor: '#fff',

},

closeBtn:{
    position: 'absolute',
    top: 16,
}

});
    

export default ContactSelectPopup;


