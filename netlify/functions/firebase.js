const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {

  apiKey: "AIzaSyAZxejosIl0oH9nPokatwZUzgbpx-xs33M",
  authDomain: "week9-f0950.firebaseapp.com",
  projectId: "week9-f0950",
  storageBucket: "week9-f0950.appspot.com",
  messagingSenderId: "702039642494",
  appId: "1:702039642494:web:3c0ae425bd9aaa3750a32f",
  measurementId: "G-VHSJ8BBYJE"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase