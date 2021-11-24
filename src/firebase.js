import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
//import Vuex from 'vuex'
var firebaseConfig = {
    apiKey: "AIzaSyAmB8J_jy-pDWb1wiDjSDM0yiGdYlymUjk",
    authDomain: "todo-8a40d.firebaseapp.com",
    projectId: "todo-8a40d",
    storageBucket: "todo-8a40d.appspot.com",
    messagingSenderId: "19513798715",
    appId: "1:19513798715:web:7a8d7fbd30561de59b2c1e"
  };
  // Initialize Firebase
  let firebaseApp = initializeApp(firebaseConfig)

  let db = getFirestore()


  export  {
      firebaseApp,
      db
  }