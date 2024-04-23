import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import React, {useState} from 'react';
import  {auth} from "../firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import './signin.css';

const Signin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const [errorMessage, setErrorMessage] = useState('');

    const signIn = (e) => {
      e.preventDefault(); 
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
          console.log(userCredential);

          navigate("/Home");
        })
        .catch((error) =>{
          if (error.code === "auth/invalid-login-credentials") {
            setErrorMessage("Invalid login credentials. Please try again.");
        } else {
            setErrorMessage("An error occurred. Please try again later.");
        }
          console.log(error);
        });
    }

  const handleReset = () =>{
    navigate("/reset");
  }

  return (
    <div className='sign-in-container'>
    <Row> 
    <Col className='logo'>
        <img className='elips' src='.\img\Ellipse 5.svg' alt='elips'></img>
        <img src='.\img\Frame 9.png' alt='frame'></img>
    </Col>
   

    <Col className='signup_part'>
        <div className="div1">
            <div>
                <div className='topic-bottom'>
                    <h6>Step 2 of 2</h6>
                    <h2>Sign In</h2>
                    <h6>New user ?<a href='Signup' onClick={() => navigate("/Signup")}> Create an account</a></h6>
                </div>

    <form onSubmit={signIn} className='signup-form'>
    
        <input 
        type='email' 
        placeholder='Enter you Email' 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        >
        </input>
        <input 
        type='password' 
        placeholder='Enter your password' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        >
        </input>

      <p onClick={handleReset}>Forget password?</p>

      {errorMessage && <p className="error-message">{errorMessage}</p>} 

      <button className='btn continue' type='submit'>Log In</button>

    </form>
    <hr className="line1" />
    <div className='google_fb'>
    <a href="/">
        <img
        src="./img/google-icon-logo-svgrepo-com 1.svg"
        alt="google"
        className='google'
        />
        </a>
    
        <a href="/">
            <img
            src="./img/facebook-3-logo-svgrepo-com 1.svg"
            alt="facebook"
            className='fb'
            />
            </a>        
    </div>
    <a className="help" href="/">Get help signing in</a>


    
    </div>
       </div>
    </Col>
    </Row>   
    </div>
  )
}

export default Signin;