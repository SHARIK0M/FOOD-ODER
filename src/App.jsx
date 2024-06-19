import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import Footer from "./Components/Footer/Footer"
import { useState } from "react"
import LoginPopup from "./Components/LoginPopup/LoginPopup"

const App = () => {

  const [showLogin,setShowlogin] = useState(false)

  return (
  <>
  {showLogin?<LoginPopup setShowlogin={setShowlogin}/>:<></>}
    <div className="app">
      <Navbar setShowlogin={setShowlogin}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<Placeorder/>} />
      </Routes>
    </div>
    <Footer/>
  </>
  )
}

export default App