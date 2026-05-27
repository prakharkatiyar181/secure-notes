import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import notesService from '../../services/notesService';
import { encryptNote } from '../../utils/encryption';

const initialState = {
    notes: [],
    loading: false,
    error: null,
};

export const getNotes = createAsyncThunk('notes/getNotes', async (_, thunkAPI) => {
    try {
        return await notesService.getNotes();
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.msg) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const addNote = createAsyncThunk('notes/addNote', async (noteData, thunkAPI) => {
    try {
        const encryptedContent = encryptNote(noteData.content);
        return await notesService.addNote({ content: encryptedContent });
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.msg) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const deleteNote = createAsyncThunk('notes/deleteNote', async (noteId, thunkAPI) => {
    try {
        return await notesService.deleteNote(noteId);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.msg) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNotes.pending, (state) => {
                state.loading = true;
            })
            .addCase(getNotes.fulfilled, (state, action) => {
                state.loading = false;
                state.notes = action.payload;
                state.searchTerm = '';
            })
            .addCase(getNotes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addNote.pending, (state) => {
                state.error = null;
            })
            .addCase(addNote.fulfilled, (state, action) => {
                state.notes.push(action.payload);
            })
            .addCase(addNote.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(deleteNote.pending, (state) => {
                state.error = null;
            })
            .addCase(deleteNote.fulfilled, (state, action) => {
                state.notes = state.notes.filter((note) => note.id !== action.meta.arg);
            })
            .addCase(deleteNote.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const { setSearchTerm } = notesSlice.actions;
export default notesSlice.reducer;
