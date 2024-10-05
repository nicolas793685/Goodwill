import { createTheme } from '@mui/material/styles';
import heroImage from './assets/hero.jpg'; // Import image

//Here you can create custom theme. This is the theme thats currently being used. 
//Everything below is basically garbage, I just added it here so we know its an option.
const theme = createTheme({
    palette: {
        primary: {
            main: '#1C1C3F', // Midnight Blue
        },
        secondary: {
            main: '#2ED573', // Neon Green
        },
        error: {
            main: '#FF6F20', // Flame Orange
        },
        background: {
            default: '#FFFFFF', // Default background color
            paper: '#F5F5F5', // Paper background color
        },
    },
    typography: {
        h1: {
            fontSize: '2rem', // Customize heading sizes
            color: 'white'
        },
        body1: {
            fontSize: '1rem',
            color: 'white'
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    zIndex: 0, // Ensure the content stays above the pseudo-element
                    '&::before': {
                        content: '""', // Empty content to create the pseudo-element
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${heroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        filter: 'blur(4px)', // Blur  background
                        zIndex: -1, // Ensure it's behind the content
                    },
                },
            },
        },
    },
});

export default theme;
