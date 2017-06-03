import firebase from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_firebase_apiKey,
  authDomain: process.env.REACT_APP_firebase_authDomain,
  databaseURL: process.env.REACT_APP_firebase_databaseURL,
  projectId: process.env.REACT_APP_firebase_projectId,
  storageBucket: process.env.REACT_APP_firebase_storageBucket,
  messagingSenderId: process.env.REACT_APP_firebase_messagingSenderId,
}

if (process.env.NODE_ENV !== 'production') {
  window.firebase = firebase
}

export function initFirebase() {
  firebase.initializeApp(config)
}