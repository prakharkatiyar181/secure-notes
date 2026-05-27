import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNotes } from '../../redux/slices/notesSlice';
import NoteItem from './NoteItem';
import { List, CircularProgress, Alert } from '@mui/material';

const NoteList = () => {
    const dispatch = useDispatch();
    const { notes, loading, error } = useSelector((state) => state.notes);

    useEffect(() => {
        dispatch(getNotes());
    }, [dispatch]);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Alert severity="error">{error}</Alert>;
    }

    return (
        <List>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} />
            ))}
        </List>
    );
};

export default NoteList;
