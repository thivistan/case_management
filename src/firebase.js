import * as firebase from 'firebase';
// import {getFirestore} from "@firebase/firestore";
import 'firebase/database';

// Your app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyDxansqdZFtRCgECqFe-hnpQWI4KLyOQ8s',
  authDomain: 'casemanagementapp-e92b7.firebaseapp.com',
  projectId: 'casemanagementapp-e92b7',
  storageBucket: 'casemanagementapp-e92b7.appspot.com',
  messagingSenderId: '722174481744',
  appId: '1:722174481744:web:49075a599d5acbf688c855',
  measurementId: 'G-2F2N8E5776',
  databaseURL: 'https://casemanagementapp-e92b7-default-rtdb.firebaseio.com',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

// export const firestore = getFirestore(app); 

export { auth };

export const db = firebase.database();
