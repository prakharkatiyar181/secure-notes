import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <AppBar position="static" color="primary" elevation={0}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                    Secure Notes
                </Typography>
                <Button color="inherit" onClick={onLogout} endIcon={<AccountCircle />}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
