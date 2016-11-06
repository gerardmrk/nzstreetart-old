import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDN4RaOfHOH12eZ0NfFUd3vxfknZCaToLk',
  authDomain: 'nzstreetart-test-1d8f7.firebaseapp.com',
  databaseURL: 'https://nzstreetart-test-1d8f7.firebaseio.com',
  storageBucket: 'nzstreetart-test-1d8f7.appspot.com',
  messagingSenderId: '347466129293'
}

const firebaseapi = firebase.initializeApp(config)

export default firebaseapi
