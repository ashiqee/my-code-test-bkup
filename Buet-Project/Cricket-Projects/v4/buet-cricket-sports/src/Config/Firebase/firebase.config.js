// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBjX3we-GhjUGWHm3wGKdPs9iwcg-AvVSQ",
  authDomain: "buetcricket.firebaseapp.com",
  projectId: "buetcricket",
  storageBucket: "buetcricket.appspot.com",
  messagingSenderId: "75324596527",
  appId: "1:75324596527:web:e90207049700ca9c7681da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
