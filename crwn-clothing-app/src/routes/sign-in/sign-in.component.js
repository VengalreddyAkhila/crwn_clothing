import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import { auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils"
import { createUserDocumentDromAuth } from "../../utils/firebase/firebase.utils";

 const SignIn = () => {
    useEffect(async () => {
        const response = await getRedirectResult(auth);
        return () => {
        console.log(response)
        }
    },[])
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentDromAuth(user)
    }
   
   
return(
    <div>
        <h1>Sign In Page</h1>
        <button onClick = {logGoogleUser}>Sign In</button>
        <button onClick = {signInWithGoogleRedirect}>Sign In with Redirect</button>
    </div>
)
}
export default SignIn