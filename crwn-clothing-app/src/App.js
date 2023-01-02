import Home from "./routes/home/home.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Routes,Route} from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/Authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.components";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { createUserDocumentDromAuth } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentDromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
  <Routes>
    <Route path="/" element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path='shop/*' element={<Shop/>}/>
    <Route path="auth" element={<Authentication/>}></Route>
    <Route path="checkout" element={<Checkout/>}></Route>
    </Route>
  </Routes>
  )
}

export default App
