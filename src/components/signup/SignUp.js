import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import './_signup.scss'

const SignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/')
      })
      .catch(error => alert(error.message))
      setEmail('')
      setPassword('')
  }

  const register = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
         if (auth) {
           navigate('/')
         }
        console.log('The User Is___', auth);
      })
      .catch(error => alert(error.message))
      setEmail('')
      setPassword('')
  }

  return (
   <div className="signup">
     <Link to='/'>
       <img src="images/header/signin.jpg" alt="" className='signup-logo'/>
     </Link>

     <div className="signup-container">
       <h1>Sign-in</h1>

       <form>
         <h5>E-mail</h5>
         <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

         <h5>Password</h5>
         <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

         <button type='submit' onClick={login} className='sign-in'>Sign In</button>
       </form>

       <p>
         By signing-in you agree to amazon's Conditions of
         Use & Sale. Please see our Privacy Notice, our Cookies
         Notice and our Interest-Based Ads
       </p>

       <button onClick={register} className='register'>Create your Amazon account</button>
     </div>
   </div>
  )
};

export default SignUp;
