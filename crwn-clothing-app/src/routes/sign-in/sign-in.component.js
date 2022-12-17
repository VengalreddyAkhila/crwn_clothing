
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import { createUserDocumentDromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-component";

 const SignIn = () => {
  
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentDromAuth(user)
    }
   
   
return(
    <div>
        <h1>Sign In Page</h1>
        <button onClick = {logGoogleUser}>Sign In</button>
        <SignUpForm/>
      
    </div>
)
}
export default SignIn