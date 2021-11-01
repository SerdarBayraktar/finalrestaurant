import * as firebase from "firebase";
import "firebase/firestore";

let config = {
  databaseURL: "https://nene-51a1d.firebaseio.com",

  apiKey: "AIzaSyA4VRxWGl03UeyGEfAmy4G_TI8xUhMjQJ4",
    authDomain: "nene-51a1d.firebaseapp.com",
    projectId: "nene-51a1d",
    storageBucket: "nene-51a1d.appspot.com",
    messagingSenderId: "397479946238",
    appId: "1:397479946238:web:2cd0a8efb51588eb95c2af",
    measurementId: "G-TNVK78RC8J"
};

firebase.initializeApp(config);

export default firebase.firestore();
