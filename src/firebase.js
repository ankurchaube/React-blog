import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC_Qgr8mA8V0j2htwVVWf9_50TNmY7tn6U",
    authDomain: "react-hooks-blog-f655e.firebaseapp.com",
    projectId: "react-hooks-blog-f655e",
    storageBucket: "react-hooks-blog-f655e.appspot.com",
    messagingSenderId: "637913543260",
    appId: "1:637913543260:web:cb933c2755762ee186ac99"
  };
  
 firebase.initializeApp(firebaseConfig);


 export const firestore = firebase.firestore()