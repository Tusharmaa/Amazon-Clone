import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBFGbPPx-UVrz-OaF1i-vpuKml0UEdyE2k",
  authDomain: "mystore-339a5.firebaseapp.com",
  databaseURL: "https://mystore-339a5.firebaseio.com",
  projectId: "mystore-339a5",
  storageBucket: "mystore-339a5.appspot.com",
  messagingSenderId: "1060400761820",
  appId: "1:1060400761820:web:761a450bb8c6b915539d19",
  measurementId: "G-DPPW764S00",
});

const auth = firebase.auth();

export { auth };
