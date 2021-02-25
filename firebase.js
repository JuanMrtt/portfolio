import firebase from 'firebase/app';
// import 'firebase/analytics';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECTID,
    storageBucket: process.env.FB_STORAGEBUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID,
    measurementId: process.env.FB_MEASUREMENT_ID,
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
