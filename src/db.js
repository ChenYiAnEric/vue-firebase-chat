import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCM0bd-iuLr-9pV4QjFocY_b_RFKQKwkW4',
  authDomain: 'chat-firebase-971ee.firebaseapp.com',
  databaseURL: 'https://chat-firebase-971ee.firebaseio.com',
  projectId: 'chat-firebase-971ee',
  storageBucket: 'chat-firebase-971ee.appspot.com',
  messagingSenderId: '596857563795',
  appId: '1:596857563795:web:045833b44dc502dac83b66',
  measurementId: 'G-T1GC8CZ1TC'
}

// Get a Firestore instance
const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp
