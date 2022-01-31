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
import Payment from "./components/payment/Payment"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"


const promise = loadStripe(
  'pk_test_51KMo6QDHzD21WqCnarfVU3zJVISkfiHO5vfaJcuINhSFApy4DeFANpJXGpagvGDxErMcZuBqndsY9mZoxhx3HiO200g5EzxnaY'
)

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
     <Route 
        path='/payment' 
        element={[<Header/>,
           <Elements stripe={promise}>
              <Payment/>
           </Elements>]}/>
   </Routes>
  </div>
 )
}

export default App
