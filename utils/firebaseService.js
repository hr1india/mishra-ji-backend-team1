
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCbaZpONzGz0MfDac6V7rQwB0hXax7xfE8",
    authDomain: "mishra-application-9869b.firebaseapp.com",
    projectId: "mishra-application-9869b",
    storageBucket: "mishra-application-9869b.firebasestorage.app",
    messagingSenderId: "353961270499",
    appId: "1:353961270499:web:716a88552a6158592d39d6",
    measurementId: "G-E75CKVGQSL"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };