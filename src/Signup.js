import React, { use, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";

export default function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('')

        try {
            //this creates new account in firebase
            //user is automatically logged in after signup
            //firebase stores credentials in its backend 
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/dashboard')
        } catch (err) {
            setError('Failed to sign up. Try a stronger password.')
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh', //takes full screen height
                bgcolor: 'background.default', //uses theme.js background colour
                padding: 2,
                width: '100vw'
            }}

        >
            {/* Paper creates a paper like surface for padding, background, shadow etc. */}
            <Paper
                elevation={4} //shadow depth
                sx={{
                    padding: 4,
                    maxWidth: 400,
                    width: '100%',
                    bgcolor: 'background.paper', //dark surface
                    borderRadius: 4,
                }}
            >

                {/* Page Title */}
                <Typography
                    variant='h4'
                    mb={2}
                    color='primary' //from theme.js
                    align='center'
                    fontWeight='600'
                >Sign Up</Typography>

                {/* Login Form */}
                <form onSubmit={handleSignup}>
                    {/* email input */}
                    <TextField
                        fullWidth
                        label='Email'
                        variant='outlined'
                        marin='normal'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {/* password input */}
                    <TextField
                        fullWidth
                        label='Password'
                        variant='outlined'
                        margin='normal'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* submit button */}
                    <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        type='submit'
                        sx={{ mt: 2 }}
                    >Sign Up</Button>

                </form>
                {/* display error message if there is */}
                {error && <Typography color='error' mt={2}>{error}</Typography>}

            </Paper>
        </Box>
    )
}