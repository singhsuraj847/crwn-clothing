import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCK1b_yJA5WGNmcia4BOozY9ma-IudkDEQ",
  authDomain: "cloth-db-41eba.firebaseapp.com",
  databaseURL: "https://cloth-db-41eba.firebaseio.com",
  projectId: "cloth-db-41eba",
  storageBucket: "cloth-db-41eba.appspot.com",
  messagingSenderId: "468124239928",
  appId: "1:468124239928:web:d28c51896afd7fc55bbecd",
  measurementId: "G-74KJZBHCZW",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
