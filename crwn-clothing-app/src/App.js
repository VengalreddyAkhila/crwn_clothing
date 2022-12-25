import Home from "./routes/home/home.component";
import {Routes,Route} from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/Authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path="auth" element={<Authentication/>}></Route>
    </Route>
  </Routes>
  )
}

export default App
