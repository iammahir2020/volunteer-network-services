// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8P82CQfmnwmJ_zT90QjwtgcUDi5Ez8AE",
  authDomain: "volunteer-network-services.firebaseapp.com",
  projectId: "volunteer-network-services",
  storageBucket: "volunteer-network-services.appspot.com",
  messagingSenderId: "937282460651",
  appId: "1:937282460651:web:043c2df91c3538998857ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
