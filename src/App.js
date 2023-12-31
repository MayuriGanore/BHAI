import {BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import Contactus from './Pages/Contactus.js'
import Navbar from "./Components/Navbar.js"
import Accomodation from "./Pages/HomeF/Accomodation.js"
import Automobile from "./Pages/HomeF/Automobile.js"
import Food from "./Pages/HomeF/Food.js"
import LogIn from "./Components/Buttons/LogIn.js"
import Signup from "./Components/Buttons/Signup.js"
export default function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
        <Route path="/Accomodation" element={<Accomodation/>}/>
        <Route path="/Automobile" element={<Automobile/>}/>
        <Route path="/Food" element={<Food/>}/> 
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}