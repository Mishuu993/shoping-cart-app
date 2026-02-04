import { Route, Routes } from "react-router-dom";
import MyMenu from "./Component/MyMenu"
import Home from "./Component/Home";
import Cart from "./Component/Cart";

function App()
{
  return<>
   <MyMenu/>
   <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
   </Routes>
  </>
}
export default App;