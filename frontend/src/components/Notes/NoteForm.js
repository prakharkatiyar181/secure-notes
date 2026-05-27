import React from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/slices/notesSlice';
import { Button } from '@mui/material';

// For now, clicking the button will add a hardcoded note.
// In a real app, this would open a modal with a form.
const NoteForm = ({ handleOpen }) => {
    return (
        <Button
            variant="outlined"
            onClick={handleOpen}
            sx={{
                bgcolor: 'white',
                color: '#212529',
                borderColor: '#ced4da',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                fontWeight: 600,
                textTransform: 'none',
                height: '38px',
                px: 2.5,
                borderRadius: '8px',
                '&:hover': {
                    borderColor: '#adb5bd',
                    bgcolor: '#f8f9fa',
                }
            }}
        >
            Add Note
        </Button>
    );
};

export default NoteForm;
