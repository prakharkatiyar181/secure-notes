import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        onSearch(value);
    };

    const handleCancel = () => {
        setValue('');
        onSearch('');
        setIsActive(false);
    };

    if (!isActive) {
        return (
            <Box
                onClick={() => setIsActive(true)}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    width: '300px',
                    height: '38px',
                    px: 2,
                    bgcolor: '#f1f3f5',
                    borderRadius: 2,
                    cursor: 'pointer',
                    color: '#6c757d',
                    border: '1px solid transparent',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        bgcolor: '#e9ecef',
                    }
                }}
            >
                <SearchIcon fontSize="small" sx={{ color: '#6c757d' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>Search</span>
            </Box>
        );
    }

    return (
        <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                width: '300px'
            }}
        >
            <TextField
                variant="outlined"
                placeholder="Type search..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                autoFocus
                size="small"
                sx={{
                    flexGrow: 1,
                    '& .MuiOutlinedInput-root': {
                        height: '38px',
                        bgcolor: 'white',
                        borderRadius: 2,
                        '& fieldset': {
                            borderColor: '#ced4da',
                        },
                        '&:hover fieldset': {
                            borderColor: 'primary.main',
                        },
                    },
                }}
            />
            <Button
                type="submit"
                variant="contained"
                size="small"
                sx={{
                    minWidth: 'auto',
                    height: '38px',
                    px: 2,
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: 'none',
                }}
            >
                Submit
            </Button>
            <Button
                variant="outlined"
                color="inherit"
                size="small"
                onClick={handleCancel}
                sx={{
                    minWidth: 'auto',
                    height: '38px',
                    px: 1.5,
                    borderRadius: 2,
                    borderColor: '#ced4da',
                    color: '#495057',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                        borderColor: '#adb5bd',
                        bgcolor: '#f8f9fa',
                    }
                }}
            >
                Cancel
            </Button>
        </Box>
    );
};

export default SearchBar;
