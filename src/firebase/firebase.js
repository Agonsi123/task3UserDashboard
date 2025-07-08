import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBU7epTwQNEi2-kikoylHysT_Ft3kJSnXY",
  authDomain: "task3userdashboard.firebaseapp.com",
  projectId: "task3userdashboard",
  storageBucket: "task3userdashboard.appspot.com",
  messagingSenderId: "391881583731",
  appId: "1:391881583731:web:37ed049763df9b3333ce06",
  measurementId: "G-218XGX482Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

