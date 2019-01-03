import { createStore, combineReducers, compose } from "redux";
import * as firebase from "firebase/app";

import "firebase/auth";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
//import { reduxFirestore, firestoreReducer } from "redux-firestore";
//import { createFirestoreInstance } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrxDCZ4AbiON3F29uxl8KEBLyxF-vMwsc",
  authDomain: "movie-database-ecafe.firebaseapp.com",
  databaseURL: "https://movie-database-ecafe.firebaseio.com",
  projectId: "movie-database-ecafe",
  storageBucket: "movie-database-ecafe.appspot.com",
  messagingSenderId: "56252694643"
};
// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

//init firebase instance
firebase.initializeApp(firebaseConfig);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig) // firebase instance as first argument
  //reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer
  //firestore: firestoreReducer // <- needed if using firestore
});

// Create initial state

const initialState = {};

// Create Store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
