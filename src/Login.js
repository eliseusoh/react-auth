import React, { useState } from "react";
//useNavigate lets you programmatically redirect the user after login
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"; //firebase function to login
import { auth } from "./firebase"; // my firebase auth instance
import { Link } from "react-router-dom";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";

export default function Login({ onLogin }) {

    //React router hook used to navigate between pages
    const navigate = useNavigate();

    //track what user types in form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //function to handle form login
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            //built in firebase function to login, automatically checks credentials against firecase database
            //if successful, logs in user and firebase remembers state
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to login. Check your credentials')
        }
    };

    return (
        //Outer box centers content vertically and horizontally 
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
                >Login</Typography>

                {/* Login Form */}
                <form onSubmit={handleLogin}>
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
                    >Login</Button>

                </form>
                {/* display error message if there is */}
                {error && <Typography color='error' mt={2}>{error}</Typography>}

                {/* signup link */}
                <Typography mt={3}>Don't have an account?{' '} <Link to='/signup'
                    style={{ color: '#81ecec' }}> Sign up here</Link></Typography>


            </Paper>
        </Box>
    )
}