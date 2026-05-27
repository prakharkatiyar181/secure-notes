import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNotes } from '../../redux/slices/notesSlice';
import NoteItem from './NoteItem';
import { decryptNote } from '../../utils/encryption';
import { Box, CircularProgress, Alert } from '@mui/material';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const NoteList = () => {
    const dispatch = useDispatch();
    const { notes, loading, error, searchTerm } = useSelector((state) => state.notes);

    useEffect(() => {
        dispatch(getNotes());
    }, [dispatch]);

    const filteredNotes = useMemo(() => {
        if (!searchTerm) {
            return notes;
        }
        return notes.filter(note =>
            decryptNote(note.encrypted_content).toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [notes, searchTerm]);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Alert severity="error">{error}</Alert>;
    }

    return (
        <Box>
            <TransitionGroup>
                {filteredNotes.map((note) => (
                    <CSSTransition
                        key={note.id}
                        timeout={300}
                        classNames="note"
                    >
                        <NoteItem note={note} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </Box>
    );
};

export default NoteList;
