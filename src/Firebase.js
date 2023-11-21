import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUuUFbyE3PDNB2iPpp4q8XtCH-BvHHfqk",
  authDomain: "busyan-e2117.firebaseapp.com",
  projectId: "busyan-e2117",
  storageBucket: "busyan-e2117.appspot.com",
  messagingSenderId: "1097817145800",
  appId: "1:1097817145800:web:211e93a79634698173c0fd",
  measurementId: "G-CTWCDGRYFE"
};

// Initialize Firebase and export auth and db directly
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export default firebaseApp;
