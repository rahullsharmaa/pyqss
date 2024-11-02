import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDYExh6FycEX03fUc1O1aChH5OGOunK5OA',
  authDomain: 'pyqs-c5710.firebaseapp.com',
  projectId: 'pyqs-c5710',
  storageBucket: 'pyqs-c5710.appspot.com',
  messagingSenderId: '566494890978',
  appId: 'YOUR_APP_ID', // replace "YOUR_APP_ID" with the actual app ID provided in Firebase
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
