import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
   apiKey: "AIzaSyCvrLnLg8lVn7zF6F39GibYH95suGmtpLQ",
   authDomain: "netflix-ish-v3.firebaseapp.com",
   projectId: "netflix-ish-v3",
   storageBucket: "netflix-ish-v3.appspot.com",
   messagingSenderId: "858183801559",
   appId: "1:858183801559:web:729f390b276ff3db68ee92",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
