"use client"
import React, { ChangeEvent, useState } from 'react'
import Appbar from '../components/common/Appbar'
import Textbox from '../components/common/Textbox'
import Link from 'next/link'

function Login() {
    const[loginData,setLoginData]=useState({
        email:"",
        password:"",
        confirmPassword:""
    })
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setLoginData(prev=>{
            return {
                ...prev,
                [event.target.name]:[event?.target.value]
            }
        })
    }
    function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        if (loginData.email==='' && loginData.password==='' && loginData.confirmPassword==='')
        {
            return
        }
        event.preventDefault()
        console.log(loginData)
      }
  return (
    <div>
    <Appbar>
        <Link href='/' style={{padding:"12px",fontSize:"28px",margin:"12px 12px",fontWeight:"600",marginLeft:"24px",color:"white"}}>KwikNotes</Link>
        <div>
          <Link href='/form' style={{marginRight:"28px",color:"white"}}>SIGN UP</Link>
          <Link href='/loginform' style={{marginRight:"28px",color:"white"}}>LOG IN</Link>
        </div>
    </Appbar>
    <form style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
    <div className='Form'>
          <h1 style={{display:"flex",margin:"auto",padding:"16px",fontSize:"28px",fontWeight:"600"}}>LOGIN</h1>
          {/* <input type='text' placeholder='First name' onChange={handleChange} name='firstName' value={name.firstName} style={{width:'250px',margin:'auto',padding:'10px'}} /> */}
          <Textbox type='email' placeholder='E-mail' onChange={handleChange} name='email' value={loginData.email} style={{width:'250px',margin:'auto',padding:'10px'}}/>
          <br/>
          <Textbox type='password' placeholder='Password' onChange={handleChange} name='password' value={loginData.password} style={{width:'250px',margin:'auto',padding:'10px'}}/>
          <br/>
          <Textbox type='password' placeholder='Confirm Password' onChange={handleChange} name='confirmPassword' value={loginData.confirmPassword} style={{width:'250px',margin:'auto',padding:'10px'}}/>
          <br/>
          {loginData.password===loginData.confirmPassword ? <button className='Submit-button' onClick={handleSubmit} type='submit' style={{width:'100%',margin:'auto',padding:'10px'}}>SAVE</button> : <p>PASSWORDS DO NOT MATCH</p>}
        </div>
    </form>
    </div>
  )
}

export default Login