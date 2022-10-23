import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApIpNAvV-FhRbt2_6hxi00BuBKnkn9wuo",
  authDomain: "casemanagement-app-96e1a.firebaseapp.com",
  projectId: "casemanagement-app-96e1a",
  storageBucket: "casemanagement-app-96e1a.appspot.com",
  messagingSenderId: "2789516969",
  appId: "1:2789516969:web:25e717fd3aa8fb0e552bb8"
};


let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();
export { auth };
