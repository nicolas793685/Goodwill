import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = ({ onGetStartedClick, onLoginClick }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                flex: 1,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                },
            }}
        >
            <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Typography variant="h2" gutterBottom>
                    Welcome Fusian Car Club
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Discover amazing content and connect with us!
                </Typography>
                <Button variant="contained" color="secondary" href="/events">
                    Upcoming Events
                </Button>
                {/* 
                <Button variant="contained" color="primary" onClick={onLoginClick}>
                    Login
                </Button> */}
            </Box>
        </Box>
    );
};

export default Hero;
