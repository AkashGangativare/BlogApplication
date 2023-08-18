import React, { useContext, useEffect } from 'react'
import './login.css'
import { Link } from "react-router-dom";
import { useRef } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';
export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching} = useContext(Context)
  const handleSubmit = async(e)=>{
        e.preventDefault()
        dispatch({type : "LOGIN_START"})

      
        try{
          const res = await axios.post("/auth/login",{
            username:userRef.current.value,
            password : passwordRef.current.value,
          })
          dispatch({type : "LOGIN_SUCESS",
          payload : res.data})

        }catch(e){
          dispatch({type : "LOGIN_FAILURE"})
        }
      } 
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form className='loginForm' onSubmit={handleSubmit}>
        <label>Username</label>
        <input className='loginInput' ref={userRef} type="text" placeholder='Enter your username' />
        <label>Password</label>
        <input className='loginInput' ref={passwordRef} type="password" placeholder='Enter your Password' />
        <button className='loginButton' type='submit' disabled={isFetching}> 
          Login
        </button>
      </form>
      <button className='loginRegisterButton'><Link className="link" to="/register">
        Register
      </Link></button>
    </div>
  )
}
