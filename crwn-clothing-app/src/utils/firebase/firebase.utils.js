import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'

import {getFirestore,
doc,
getDoc,
setDoc
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDhsZ0px6EsnFDfWFgCink7Atr9EBQClQ",
    authDomain: "crwn-clothing-app-e4d39.firebaseapp.com",
    projectId: "crwn-clothing-app-e4d39",
    storageBucket: "crwn-clothing-app-e4d39.appspot.com",
    messagingSenderId: "253729834401",
    appId: "1:253729834401:web:41ae5e1ef68c6f9009f7e0"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:"select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider)
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider)

  export  const db = getFirestore();
  export const createUserDocumentDromAuth = async (userAuth) => {
      const userDocRef = doc(db, 'users', userAuth.uid)
      console.log(userDocRef)

      const userSnapshot = await getDoc(userDocRef)
      console.log(userSnapshot)
      console.log(userSnapshot.exists())

      if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
          await setDoc(userDocRef,{
            displayName,
            email,createdAt
          });
        }catch(error){
           console.log('error creating the user' , error.message)
        }
      }
  }
  