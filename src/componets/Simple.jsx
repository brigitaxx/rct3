import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Simple = () => {
    const [input,setInput] = useState({
        password:"",
        confirmpassword:""
    })

    const toastoptions = {
        position: "bottom-right",
        autoClose: 6000,
        pauseHover: true,
        draggable: true,
        theme: "dark"
    }

    const inputHandler = (e) => {
        setInput({...input,[e.target.name]:e.target.value})
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const {password,confirmpassword} = input

        if(password!==confirmpassword) 
        toast.error("password and confirm password not same",toastoptions)
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <br />
      <TextField name='password' onChange={inputHandler} label="password"/><br /><br />
      <TextField name='confirmpassword' onChange={inputHandler} label="confirmpassword"/><br /><br />
      <Button type='submit'>Submit</Button>
    </form>
    <ToastContainer />



</>
  )
}

export default Simple
