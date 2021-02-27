import firebase from 'firebase/app';
// import 'firebase/analytics';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    databaseURL: process.env.FB_DATABASE_URL,
    // projectId: process.env.FB_PROJECTID,
    projectId: 'portfolio-juan-8095b',
    storageBucket: process.env.FB_STORAGEBUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID,
    measurementId: process.env.FB_MEASUREMENT_ID,
};

// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
    firebase.database();
}
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export default firebase;
