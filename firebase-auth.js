// Import the functions you need from the SDKs you need

import { getApps, initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu_gzvlP7PhJ0tuS5XuHMNEpVnDC3ivTw",
  authDomain: "fir-rn-login-evan.firebaseapp.com",
  projectId: "fir-rn-login-evan",
  storageBucket: "fir-rn-login-evan.appspot.com",
  messagingSenderId: "272507778719",
  appId: "1:272507778719:web:93ebdd7cb6c285f51a54aa"
};

// Initialize Firebase
let app;
if (getApps().length < 1){
    app = initializeApp(firebaseConfig);
} else {
    app = getApps();
}

const auth = getAuth();

export {auth};