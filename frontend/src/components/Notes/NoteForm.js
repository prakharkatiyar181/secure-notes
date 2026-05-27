import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/slices/notesSlice';
import { Button } from '@mui/material';

// For now, clicking the button will add a hardcoded note.
// In a real app, this would open a modal with a form.
const NoteForm = () => {
    const dispatch = useDispatch();

    const onAddNote = () => {
        dispatch(addNote({ content: 'New Note' }));
    };

    return (
        <Button
            variant="contained"
            onClick={onAddNote}
        >
            Add Note
        </Button>
    );
};

export default NoteForm;
