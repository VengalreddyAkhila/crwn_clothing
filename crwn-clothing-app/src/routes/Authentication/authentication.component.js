
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import { createUserDocumentDromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-component";
import SignInForm from "../../components/sign-in-form copy/sign-in-component";
import './authentication.styles.scss'

 const Authentication = () => {
  
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentDromAuth(user)
    }
   
   
return(
    <div className="authentication-container">
        <SignInForm/>
        <SignUpForm/>
      
    </div>
)
}
export default Authentication