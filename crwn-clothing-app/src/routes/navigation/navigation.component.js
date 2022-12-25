import { Outlet, Link } from "react-router-dom"
import { Fragment , useContext} from "react"
import {ReactComponent as CrwnLogo} from '../../assests/crown.svg'
import '../navigation/navigation.styles.scss'
import { UserContext } from "../../context/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { signOut } from "firebase/auth"

const Navigation = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    //console.log(currentUser)
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null)
    }
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                            ) : ( <Link className="nav-link" to='/auth'>
                            SIGNIN
                        </Link>
                        )
                    }
                  
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation