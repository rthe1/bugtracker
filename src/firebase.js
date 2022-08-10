// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU6qxUaEg_vtbm_Uu-j62k1qWkPjv3IjI",
  authDomain: "bug-tracker-ef85b.firebaseapp.com",
  projectId: "bug-tracker-ef85b",
  storageBucket: "bug-tracker-ef85b.appspot.com",
  messagingSenderId: "703964268421",
  appId: "1:703964268421:web:26fbba8e2e2eebb22ca6ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)