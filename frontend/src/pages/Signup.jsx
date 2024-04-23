import {createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import  {auth} from "../firebase";
import { Row, Col } from 'react-bootstrap';
import './signin.css';

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const signUp = (e) => {
      e.preventDefault(); 
      createUserWithEmailAndPassword (auth, email, password)
        .then((userCredential) =>{
          console.log(userCredential);

          navigate("/Home");
        })
        .catch((error) =>{
          if (error.code === "auth/email-already-in-use") {
            // Set custom message for email already in use
            setErrorMessage("Account already exits. Please sign in.");
        } else {
            // Handle other errors in a generic way
            setErrorMessage("An error occurred. Please try again later.");
        }
          console.log(error);
        });
    }

  return (
    <div className='sign-in-container'>
    <Row>  
    <Col className='logo'>
        <img className='elips' src='.\img\Ellipse 5.svg' alt='elips'></img>
        <img src='.\img\Frame 9.png' alt='frame'></img>
    </Col>

    <Col className='signup_part'>
        <div className='div1'>
        <Row>
            <div className='topic-bottom'>
                <h6>Step 1 to 2</h6>
                <h2>Create an Account</h2>
                        
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
                    <hr className="line1" />
                    <Row>
                            <h4>Sign up with email</h4>
                            <h6>Already have an account? <a href='/Signin' onClick={() => navigate("/Signin")}>Sign in</a></h6>
                    </Row>                    
                </div>
            </div>
        </Row>
                        
    <form onSubmit={signUp} className='signup-form'>
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
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display the error message if it exists */}
        <button className='btn continue' type='submit'>Sign Up</button>
        
    </form>
    
    </div>
    
    </Col>
    </Row> 
    </div> 
   
  )
}

export default Signup;