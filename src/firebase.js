import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDh5Y93mslanrGuK-fEC-_kt0aGCO1njM4",
    authDomain: "siveals.firebaseapp.com",
    projectId: "siveals",
    storageBucket: "siveals.appspot.com",
    messagingSenderId: "907893628236",
    appId: "1:907893628236:web:e88ad4762df3b21b98c3e9",
    measurementId: "G-WXH3NWX07P"
})

export const auth = app.auth()
export default app
export const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  export const logout = () => {
    auth.signOut();
  };

