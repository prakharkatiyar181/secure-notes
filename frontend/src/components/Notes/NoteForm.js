import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/slices/notesSlice';
import { Box, TextField, Button } from '@mui/material';

const NoteForm = () => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({ content }));
        setContent('');
    };

    return (
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="content"
                label="New Note"
                name="content"
                autoFocus
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Add Note
            </Button>
        </Box>
    );
};

export default NoteForm;
