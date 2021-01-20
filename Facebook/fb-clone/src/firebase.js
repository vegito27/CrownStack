import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDGmQUANnuAN1pV9AfMSLpOSSB24xAkqT8",
  authDomain: "banded-nimbus-266708.firebaseapp.com",
  databaseURL: "https://banded-nimbus-266708.firebaseio.com",
  projectId: "banded-nimbus-266708",
  storageBucket: "banded-nimbus-266708.appspot.com",
  messagingSenderId: "971623970662",
  appId: "1:971623970662:web:1c885a520b7181c993baa7"
};


const firebaseApp=firebase.initializeApp(firebaseConfig)

const db=firebaseApp.firestore()

const auth=firebase.auth();

const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider}

export default db;


