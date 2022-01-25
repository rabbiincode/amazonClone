import Header from "./components/header/Header"
import Home from "./components/home/Home"
import CheckOut from "./components/checkOut/CheckOut"
import { Route, Routes } from "react-router-dom"
import SubHeader from "./components/subheader/SubHeader"
import './_app.scss'


const App = () => {
 return (
  <div className="app">
   <Header/>
   <SubHeader/>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='checkout' element={<CheckOut/>}/>
   </Routes>
  </div>
 )
}

export default App
