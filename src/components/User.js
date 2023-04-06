import React from 'react';
import { auth, db } from '../firebase/firebase';

// writes user data to firebase
function WriteNewUserDataToDB({ firstName, lastName }) {
  // if the current user is not null
  if (auth.currentUser) {
    db.ref('users/' + auth.currentUser.userId).set({
      first_name: firstName,
      last_name: lastName,
    });
  }
}

export default WriteNewUserDataToDB;
