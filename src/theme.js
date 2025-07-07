import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#a29bfe' //purple
        },
        secondary: {
            main: '#81ecec', //teal
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e' //card-style surface
        },
        text: {
            primary: '#f1f1f1',
            secondary: '#b2bec3',
        },
    },
    shape: {
        borderRadius: 12
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
})

export default theme;