import firebase from 'firebase/compat/app'; // Remplacez 'compat' par 'app'
import 'firebase/compat/auth';
import 'firebase/compat/analytics'; // Incluez cette ligne si vous utilisez Analytics

const firebaseConfig = {
  // apiKey: 'AIzaSyDzifRoJG_FzESnzk2uTL3Up9NZ9LlAIdU',
  // authDomain: 'fiishopapp.firebaseapp.com',
  databaseURL: 'https://fiishopapp.firebaseio.com',
  // projectId: 'fiishopapp',
  // storageBucket: 'fiishopapp.appspot.com',
  // messagingSenderId: '109313543981',
  // appId: '1:109313543981:web:8b8b7179b13d4de7060da4',
  // measurementId: 'G-TV3YK07499',
  apiKey: 'AIzaSyBLXP3qg6dIj_elbXWFMmknD_fVRmnDM0o',
  authDomain: 'fiistore-io.firebaseapp.com',
  projectId: 'fiistore-io',
  storageBucket: 'fiistore-io.appspot.com',
  messagingSenderId: '1045453849525',
  appId: '1:1045453849525:web:fa6992a3f69262174c0ffc',
  measurementId: 'G-FJQLJTT88X',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
}

export default firebase;
