import React, { useState } from 'react'
import './register.css'
import { Link } from "react-router-dom";
import axios from 'axios';
export default function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)


    const handleSubmit = async(e)=>{
        e.preventDefault()
        setError(false)

        try{

            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
              });
              res.data && window.location.replace("/login")
        }catch(error){

           setError(true)
        }
    }

  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
        <form className='registerForm' onSubmit={handleSubmit}>
            <label>Username</label>
            <input className='registerInput' onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder='Enter your Username'/>
            <label>Email</label>
            <input className='registerInput' onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Enter your email'/>
            <label>Password</label>
            <input className='registerInput'  onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Enter your Password'/>
            <button className='registerButton' type='submit'>
        Register
      </button>
        </form>
        <button className='registerLoginButton'><Link className="link" to="/login">
          Login
        </Link></button>
       { error && <span style={{color:"red", marginTop:"10px"}}>Somthing went wrong!</span>}
    </div>
  )
}
