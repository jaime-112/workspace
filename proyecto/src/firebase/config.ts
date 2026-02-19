import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGKmGLWbINN9ilPM_Js_62SOaPyE73Zp0",
  authDomain: "proyectoreals-e608f.firebaseapp.com",
  projectId: "proyectoreals-e608f",
  storageBucket: "proyectoreals-e608f.firebasestorage.app",
  messagingSenderId: "964275559521",
  appId: "1:964275559521:web:f0cdda6c0b444eb7eb5e20"
};

// Intialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

import { getFirestore } from "firebase/firestore";