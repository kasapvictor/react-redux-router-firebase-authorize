// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const APP_ID = import.meta.env.VITE_APP_ID;
const STORAGE = import.meta.env.VITE_STORAGE;
const API_KEY = import.meta.env.VITE_API_KEY;
const SENDER_ID = import.meta.env.VITE_SENDER_ID;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;

// Your web app's Firebase configuration
const firebaseConfig = {
  appId: APP_ID,
  apiKey: API_KEY,
  projectId: PROJECT_ID,
  storageBucket: STORAGE,
  authDomain: AUTH_DOMAIN,
  messagingSenderId: SENDER_ID,
};

initializeApp(firebaseConfig);
