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
                TabIndicatorProps={{ style: { display: 'none' } }}
                sx={{
                    '& .MuiTabs-flexContainer': {
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        overflow: 'hidden'
                    }
                }}
            >
                <Tab 
                    label="Login" 
                    sx={{ 
                        borderRight: '1px solid #e0e0e0',
                        bgcolor: tabIndex === 0 ? 'primary.main' : 'transparent',
                        color: tabIndex === 0 ? 'white !important' : 'inherit'
                    }} 
                />
                <Tab 
                    label="Register"
                    sx={{ 
                        bgcolor: tabIndex === 1 ? 'primary.main' : 'transparent',
                        color: tabIndex === 1 ? 'white !important' : 'inherit'
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
