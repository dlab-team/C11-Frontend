// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apikey = import.meta.env.VITE_APIKEY
const authDomain = import.meta.env.VITE_AUTHDOMAIN
const projectId = import.meta.env.VITE_PROJECTID
const storageBucket = import.meta.env.VITE_STORAGEBUCKET
const messagingSenderId = import.meta.env.VITE_MESSAGINGSENDERID
const appId = import.meta.env.VITE_APPID
const measurementId = import.meta.env.VITE_MEASUREMENTID
const firebaseConfig = {
  apiKey: apikey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);

export const auth = getAuth(app)
