import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import notifyReducer from "./reducers/notifyReducers";
import videoReducer from "./reducers/videoReducers";

const firebaseConfig = {
  apiKey: "AIzaSyBrxDCZ4AbiON3F29uxl8KEBLyxF-vMwsc",
  authDomain: "movie-database-ecafe.firebaseapp.com",
  databaseURL: "https://movie-database-ecafe.firebaseio.com",
  projectId: "movie-database-ecafe",
  storageBucket: "movie-database-ecafe.appspot.com",
  messagingSenderId: "56252694643"
};

const middleware = [thunk];

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

//init firebase instance
firebase.initializeApp(firebaseConfig);

//init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  notify: notifyReducer,
  video: videoReducer
});
const initialState = {};

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
