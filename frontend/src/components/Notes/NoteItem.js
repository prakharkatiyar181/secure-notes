import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../redux/slices/notesSlice';
import { decryptNote } from '../../utils/encryption';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const NoteItem = ({ note }) => {
    const dispatch = useDispatch();

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteNote(note.id))}>
                    <DeleteIcon />
                </IconButton>
            }
        >
            <ListItemText primary={decryptNote(note.encrypted_content)} />
        </ListItem>
    );
};

export default NoteItem;
