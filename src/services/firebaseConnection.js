import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

let firebaseConfig = {
  apiKey: 'AIzaSyCHPyZj7mQY8BUlc54neEzoK8cAqQ_JPgc',
  authDomain: 'sistema-19ee0.firebaseapp.com',
  projectId: 'sistema-19ee0',
  storageBucket: 'sistema-19ee0.appspot.com',
  messagingSenderId: '254430071344',
  appId: '1:254430071344:web:f0aa9554f7bf77d88ffbf5',
  measurementId: 'G-3NSKX77LPD'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
