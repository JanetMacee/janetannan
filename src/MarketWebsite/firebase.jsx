// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA90QEY3KgA54uyAfLp6sD3ucfLU8BGcQQ",
  authDomain: "signup-f0c71.firebaseapp.com",
  projectId: "signup-f0c71",
  storageBucket: "signup-f0c71.firebasestorage.app",
  messagingSenderId: "751343074835",
  appId: "1:751343074835:web:43fde32335b32129b609e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };
