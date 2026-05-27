import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Secure Notes
                </Typography>
                <Button color="inherit" onClick={onLogout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
