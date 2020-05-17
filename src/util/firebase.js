import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCD7Ysa5TF_Sn6RdPOsSUl5VvjSDVO9n-s',
  authDomain: 'todoapp-23c28.firebaseapp.com',
  databaseURL: 'https://todoapp-23c28.firebaseio.com',
  projectId: 'todoapp-23c28',
  storageBucket: 'todoapp-23c28.appspot.com',
  messagingSenderId: '1077121620227',
  appId: '1:1077121620227:web:2befc9622a18f050b97136',
  measurementId: 'G-R09HBMG3EX',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase
