import api from './api';

const getNotes = async () => {
    const response = await api.get('/notes');
    return response.data;
};

const addNote = async (noteData) => {
    const response = await api.post('/notes', noteData);
    return response.data;
};

const deleteNote = async (noteId) => {
    const response = await api.delete(`/notes/${noteId}`);
    return response.data;
};

const notesService = {
    getNotes,
    addNote,
    deleteNote,
};

export default notesService;
