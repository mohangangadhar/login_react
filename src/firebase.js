import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCBC7EAQlyXLRAQHibCyfldHM-1yWfgpcM",
    authDomain: "signal-clone-fe8ce.firebaseapp.com",
    projectId: "signal-clone-fe8ce",
    storageBucket: "signal-clone-fe8ce.appspot.com",
    messagingSenderId: "570559533228",
    appId: "1:570559533228:web:84a3bb19541ae00047cf09"
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

