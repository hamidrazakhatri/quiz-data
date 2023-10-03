// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD16ikwZVtybAAmCTQPwEJg-7jeRSwVSkg",
  authDomain: "data-base-admin.firebaseapp.com",
  projectId: "data-base-admin",
  storageBucket: "data-base-admin.appspot.com",
  messagingSenderId: "549651913542",
  appId: "1:549651913542:web:b8333fc07576b6b2606347",
  measurementId: "G-24GDKE0WM1"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 