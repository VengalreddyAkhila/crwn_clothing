import { async } from '@firebase/util';
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword ,
    createUserDocumentDromAuth} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input-component';
import './sign-up-form.styles.scss'
import Button from '../button/button.component'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmpassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmpassword } = formFields
    console.log(formFields)
    const resetFormField = () => {
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password != confirmpassword) {
            alert("password donot match");
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(
                email,
                 password
                 );
            await createUserDocumentDromAuth(user,{displayName})
            resetFormField()
        } catch (error) {
            if(error.code == 'auth/email-already-in-use'){
                alert("cannot create user . email already in use")
            }else {
            console.log('user creation encountred error', error)
            }

        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }


    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your Email and passwword</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                   label= "Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

              
                  <FormInput
                   label= "Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                  <FormInput
                   label= "Password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                   <FormInput
                   label= "Confirm Password"
                    required
                    onChange={handleChange}
                    name="confirmpassword"
                    value={confirmpassword}
                />

                <Button  type="submit">
                    Sign Up</Button>
            </form>
        </div>
    )

}

export default SignUpForm