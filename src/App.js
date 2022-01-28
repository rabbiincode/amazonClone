import Header from "./components/header/Header"
import Home from "./components/home/Home"
import CheckOut from "./components/checkOut/CheckOut"
import { Route, Routes } from "react-router-dom"
import SubHeader from "./components/subheader/SubHeader"
import SignUp from "./components/signup/SignUp"
import { useEffect } from "react"
import './_app.scss'
import { auth } from "./firebase"
import { useStateValue } from "./components/contextApi/StateProvider"


const App = () => {
  const [{}, dispatch] = useStateValue()


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The User is', authUser);

      if (authUser) {
        //user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
 return (
  <div className="app">
   <Routes>
     <Route path='/' element={[<Header/>, <SubHeader/>, <Home/>]}/>
     <Route path='/checkout' element={[<Header/>, <SubHeader/>, <CheckOut/>]}/>
     <Route path='/signup' element={<SignUp/>}/>
   </Routes>
  </div>
 )
}

export default App
