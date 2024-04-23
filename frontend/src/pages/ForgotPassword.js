import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react'
import  {auth} from "../firebase";
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css'

function ForgotPassword() {
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const emailVal = e.target.email.value;
        sendPasswordResetEmail(auth, emailVal).then(data=>{
            alert("Check your gamil")
            
          navigate("/Signin");
        }).catch(err=>{
            alert(err.code)
        })
    }

  return (
    <div className='forgot-password-container'>
        <div className='form-container'>
        <h1>Forgot Password</h1>
        <Form onSubmit = {(e)=>handleSubmit(e)}> 
        <p>Enter you Email</p>
            <input name='email'/><br/><br/>
            <button className='btn continue'>Reset</button>
        </Form>
        </div>
    </div>
  )
}

export default ForgotPassword