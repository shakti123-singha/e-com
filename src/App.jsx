import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shope from './pages/Shope'

function App() {


  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home />}></Route>
     <Route path="/shop" element={<Shope />}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}
export default App