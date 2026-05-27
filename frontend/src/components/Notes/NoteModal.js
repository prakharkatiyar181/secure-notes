import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/slices/notesSlice';
import { Modal, Box, Typography, TextField, Button, Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

const NoteModal = ({ open, handleClose }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const content = `${title}
${body}`;
        dispatch(addNote({ content }));
        handleClose();
        setTitle('');
        setBody('');
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add Note
                </Typography>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Note Title"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ mt: 2 }}
                />
                <TextField
                    margin="dense"
                    id="body"
                    label="Note Body"
                    type="text"
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    sx={{ mt: 2, mb: 2 }}
                />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Button onClick={handleClose} fullWidth>Cancel</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleSubmit} variant="contained" fullWidth>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default NoteModal;
