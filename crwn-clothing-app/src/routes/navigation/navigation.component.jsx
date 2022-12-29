import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ReactComponent as CrwnLogo } from '../../assests/crown.svg'
import  {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink
} 
from './navigation.styles.jsx'
import { UserContext } from "../../context/user.context"
import {CartContext} from "../../context/cart.context"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { signOut } from "firebase/auth"

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);


    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) : (
                        <NavLink to='/auth'>SIGNIN</NavLink>
                    )}

                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation