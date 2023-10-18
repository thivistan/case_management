import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIptBaoYrW-INQ8uTBZKDlrT1r00MFN0E",
  authDomain: "case-management-applicat-af62c.firebaseapp.com",
  projectId: "case-management-applicat-af62c",
  storageBucket: "case-management-applicat-af62c.appspot.com",
  messagingSenderId: "575730168193",
  appId: "1:575730168193:web:3765f666826b48f37ab880",
  measurementId: "G-9W3ZJD0DVP"
};

let app = (firebase.apps.length === 0) ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = firebase.auth();

export { auth };
