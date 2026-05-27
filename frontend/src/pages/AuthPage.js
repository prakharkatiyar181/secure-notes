import React, { useState } from 'react';
import { Box, Tabs, Tab, Container, Typography } from '@mui/material';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const AuthPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Box sx={{ p: 4, bgcolor: 'white', borderRadius: 3, boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
        <Typography variant="h5" component="h1" sx={{ textAlign: 'center', mb: 2 }}>
          Secure Notes
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Tabs 
                value={tabIndex} 
                onChange={handleTabChange}
                variant="fullWidth"
                TabIndicatorProps={{ style: { display: 'none' } }}
                sx={{
                    width: '220px',
                    minHeight: 'auto',
                    '& .MuiTabs-flexContainer': {
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        bgcolor: '#f8f9fa'
                    }
                }}
            >
                <Tab 
                    label="Login" 
                    sx={{ 
                        minHeight: 'auto',
                        height: '38px',
                        fontWeight: 600,
                        bgcolor: tabIndex === 0 ? 'primary.main' : 'transparent',
                        color: tabIndex === 0 ? 'white !important' : '#495057 !important',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            bgcolor: tabIndex === 0 ? 'primary.main' : '#e9ecef',
                        }
                    }} 
                />
                <Tab 
                    label="Register"
                    sx={{ 
                        minHeight: 'auto',
                        height: '38px',
                        fontWeight: 600,
                        bgcolor: tabIndex === 1 ? 'primary.main' : 'transparent',
                        color: tabIndex === 1 ? 'white !important' : '#495057 !important',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            bgcolor: tabIndex === 1 ? 'primary.main' : '#e9ecef',
                        }
                    }}
                />
            </Tabs>
        </Box>
        {tabIndex === 0 && <Login />}
        {tabIndex === 1 && <Register />}
      </Box>
    </Container>
  );
};

export default AuthPage;
