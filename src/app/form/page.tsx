"use client"
import React, { ChangeEvent, useState } from 'react'
import Appbar from '../components/common/Appbar'
import Textbox from '../components/common/Textbox'
import Divider from '../components/common/Divider'
import Link from 'next/link'
import Button from '../components/common/Button'
import Drawer from '../components/common/Drawer'

function Form() 
{
  const[name,setName]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  })  
  const[open,setOpen]=useState(false)
  function handleClickOpen(){
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  };
  
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setName(prev=>{
      return {
        ...prev,
        [event.target.name]:event.target.value
      }
    })
  }
  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    if (name.firstName==='' && name.lastName==='' && name.email==='' && name.password==='' && name.confirmPassword==='')
    {
      console.log('NO DATA')
      return
    }
    event.preventDefault()
    console.log(name)
    
    
  }
  return (
    <>
    <Drawer open={open} onClose={handleClose} title='MENU'>
        <Link href='/form' style={{marginRight:"28px",color:"white"}}>SIGN UP</Link>
        <Divider length='100%' type='horizontal' style={{border:"1px solid white"}}/>
        <Link href='/loginform' style={{marginRight:"28px",color:"white"}}>LOG IN</Link>
        <Divider length='100%' type='horizontal' style={{border:"1px solid white"}}/>
        <Link href='/form' style={{marginRight:"28px",color:"white"}}>SIGN UP</Link>
        <Divider length='100%' type='horizontal' style={{border:"1px solid white"}}/>
        <Link href='/loginform' style={{marginRight:"28px",color:"white"}}>LOG IN</Link>
    </Drawer>
    <Appbar>
        <div>
          <Button onClick={handleClickOpen} variant='secondary'>MENU</Button>
          <Link href='/' style={{padding:"12px",fontSize:"28px",margin:"12px 12px",fontWeight:"600",marginLeft:"24px",color:"white"}}>KwikNotes</Link>
        </div>
        <div>
          <Link href='/form' style={{marginRight:"28px",color:"white"}}>SIGN UP</Link>
          <Link href='/loginform' style={{marginRight:"28px",color:"white"}}>LOG IN</Link>
        </div>
        
      </Appbar>
      <form>
        <div className='Form' style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}} >
          <h1 style={{display:"flex",margin:"auto",padding:"16px",fontSize:"28px",fontWeight:"600"}}>SIGN UP</h1>
          {/* <Divider length='100%' type='horizontal' style={{marginBottom:"24px"}}/> */}
          {/* <input type='text' placeholder='First name' onChange={handleChange} name='firstName' value={name.firstName} style={{width:'250px',margin:'auto',padding:'10px'}} /> */}
          <Textbox  onChange={handleChange} placeholder='Firstname' name='firstName' value={name.firstName} style={{width:'250px',marginTop:"16px",padding:'10px'}}/>
          <br/>
          <Textbox type='text' placeholder='Last name' onChange={handleChange} name='lastName' value={name.lastName} style={{width:'250px',margin:'auto',padding:'10px'}}/>
          <br/>
          <Textbox type='email' placeholder='E-mail' onChange={handleChange} name='email' value={name.email} style={{width:'250px',margin:'auto',padding:'10px'}}/>
          <br/>
          <Textbox type='password' placeholder='Password' onChange={handleChange} name='password' value={name.password} style={{width:'250px',margin:'auto',padding:'10px'}}/>
          <br/>
          <Textbox type='password' placeholder='Confirm Password' onChange={handleChange} name='confirmPassword' value={name.confirmPassword} style={{width:'250px',margin:'auto',padding:'10px'}}/>
          <br/>
          {name.password===name.confirmPassword?<button className='Submit-button' type="submit" onClick={handleSubmit} style={{width:'100%',margin:'auto',padding:'10px'}}>Submit</button>:"Passwords do not match"}
        </div>
        {/* {name.firstName} {name.lastName} {name.email} {name.password} {name.confirmPassword} */}
      </form>
    </>
  )
}

export default Form