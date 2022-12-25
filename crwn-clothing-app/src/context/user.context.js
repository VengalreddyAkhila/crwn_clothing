import { createContext,useState,useEffect } from "react";
import { onAuthStateChangedListener,signOutUser,createUserDocumentDromAuth } from "../utils/firebase/firebase.utils";


//as the actual value you want to access
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser: () => null,

});
export const Userprovider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser}
    signOutUser()

    useEffect(() => {
        const unsubcribe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocumentDromAuth(user)
            }
            setCurrentUser(user)
            console.log(user)
        })
        return unsubcribe

    },[])
    return <UserContext.Provider value = {value} >{children}</UserContext.Provider>
}