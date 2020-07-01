import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = require('@/firebase.config')

// Get a Firestore instance
const firebaseApp = firebase.initializeApp(config)

export const db = firebaseApp
