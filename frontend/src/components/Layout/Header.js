import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const Header = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <header className="main-header">
            <div className="header-title">Secure Notes</div>
            <button className="logout-btn" onClick={onLogout}>
                <span>Logout</span>
                <svg className="logout-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-1.07-5.51-2.68.04-1.83 3.68-2.82 5.51-2.82s5.47.99 5.51 2.82C16.43 18.93 14.03 20 12 20z" />
                </svg>
            </button>
        </header>
    );
};

export default Header;
