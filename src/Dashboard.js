import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"; //firebase logout function
import { auth } from "./firebase";
import { Box, Paper, Typography, Button, Container } from "@mui/material";

export default function Dashboard({ onLogout }) {

    //React router hook used to navigate between pages
    const navigate = useNavigate();

    //Runs when logout button is clicked
    const handleLogout = async () => {
        await signOut(auth);
        navigate('/login');
    }

    return (

        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: 'background.default',
                color: 'text.primary',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
                flexDirection: 'column',
            }}
        >
            <Typography
                variant='h4'
                color='primary'
                gutterBottom
                sx={{ fontWeight: 600, mb: 3 }}
            >
                Welcome to your Dashboard!
            </Typography>

            <Typography variant='body1' sx={{ mb: 3 }}>
                You're successfully logged in. 🎉
            </Typography>

            <Button
                variant='contained'
                color='secondary'
                onClick={handleLogout}
                sx={{ mt: 2 }}
            >
                Logout
            </Button>
        </Box >
    );
}