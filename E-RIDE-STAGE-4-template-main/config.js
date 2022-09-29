import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDduNL0bpKa_TA_doekTQFbM5JW3O2_RSY",
    authDomain: "compliant-forum-36f60.firebaseapp.com",
    projectId: "compliant-forum-36f60",
    storageBucket: "compliant-forum-36f60.appspot.com",
    messagingSenderId: "683054091996",
    appId: "1:683054091996:web:2ce2a2b9e7402623732e19"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


