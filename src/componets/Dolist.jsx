import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Dolist = () => {
    const [input, setInput] = useState({
        userid: "",
        password: "", 
        email: "",
    })

    const inputHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Typography mt={5}>
                <TextField name='userid' onChange={inputHandler} label='Item'></TextField>
                <Typography m={3}>{input.userid}</Typography>

                <TextField name='email' onChange={inputHandler} label='Item'></TextField>
                <Typography m={3}>{input.email}</Typography>

                <TextField name='password' onChange={inputHandler} label='Item'></TextField>
                <Typography mt={3}>{input.password}</Typography>
            </Typography>

        </div>
    )
}

export default Dolist
