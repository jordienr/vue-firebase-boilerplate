import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyBFKKb6akgFGsJXBivUw5FqBE3LDvD5L3o",
    authDomain: "testproject-6d1e0.firebaseapp.com",
    databaseURL: "https://testproject-6d1e0.firebaseio.com",
    projectId: "testproject-6d1e0",
    storageBucket: "testproject-6d1e0.appspot.com",
    messagingSenderId: "764362755564",
    appId: "1:764362755564:web:dc9176eef50eba4a6fc4c9",
    measurementId: "G-RQFPJFFSZG"
}

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}