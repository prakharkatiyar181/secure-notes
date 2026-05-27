import axios from 'axios';

const API_URL = 'http://localhost:5000/api/notes';

const getAuthHeaders = (token) => ({
    headers: {
        'x-auth-token': token,
    },
});

const getNotes = async (token) => {
    const response = await axios.get(API_URL, getAuthHeaders(token));
    return response.data;
};

const addNote = async (noteData, token) => {
    const response = await axios.post(API_URL, noteData, getAuthHeaders(token));
    return response.data;
};

const deleteNote = async (noteId, token) => {
    const response = await axios.delete(`${API_URL}/${noteId}`, getAuthHeaders(token));
    return response.data;
};

const notesService = {
    getNotes,
    addNote,
    deleteNote,
};

export default notesService;
