import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../redux/slices/notesSlice';
import { decryptNote } from '../../utils/encryption';
import { Paper, Typography, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const NoteItem = React.forwardRef(({ note }, ref) => {
    const dispatch = useDispatch();
    const decryptedContent = decryptNote(note.encrypted_content);
    const [title, ...body] = decryptedContent.split('\n');
    const preview = body.join('\n');

    return (
        <Paper ref={ref} sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>{title}</Typography>
                <Typography variant="body2" color="text.secondary">{preview}</Typography>
            </Box>
            <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteNote(note.id))}>
                <DeleteIcon />
            </IconButton>
        </Paper>
    );
});

export default NoteItem;
