import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Layout/Header';
import NoteForm from '../components/Notes/NoteForm';
import NoteList from '../components/Notes/NoteList';
import SearchBar from '../components/common/SearchBar';
import NoteModal from '../components/Notes/NoteModal';
import { setSearchTerm } from '../redux/slices/notesSlice';
import { Container, Paper, Box } from '@mui/material';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearch = (term) => {
    dispatch(setSearchTerm(term));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', bgcolor: '#f4f6f8', py: 4, px: 2 }}>
      <Container component="main" maxWidth="sm" sx={{ p: '0 !important' }}>
        <Paper sx={{ overflow: 'hidden', borderRadius: 3, boxShadow: '0 8px 40px rgba(0,0,0,0.08)', bgcolor: 'white' }}>
          <Header />
          <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <NoteForm handleOpen={handleOpen} />
              <SearchBar onSearch={handleSearch} />
            </Box>
            <NoteList />
          </Box>
        </Paper>
        <NoteModal open={open} handleClose={handleClose} />
      </Container>
    </Box>
  );
};

export default DashboardPage;
