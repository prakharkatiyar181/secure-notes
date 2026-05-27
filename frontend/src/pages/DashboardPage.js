import React from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Layout/Header';
import NoteForm from '../components/Notes/NoteForm';
import NoteList from '../components/Notes/NoteList';
import SearchBar from '../components/common/SearchBar';
import { setSearchTerm } from '../redux/slices/notesSlice';
import { Container, Grid, Paper, Box } from '@mui/material';

const DashboardPage = () => {
  const dispatch = useDispatch();

  const handleSearch = (term) => {
    dispatch(setSearchTerm(term));
  };

  return (
    <>
      <Header />
      <Container component="main" maxWidth="lg" sx={{ mt: 4 }}>
        <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2}}>
                <NoteForm />
                <SearchBar onSearch={handleSearch} />
            </Box>
            <NoteList />
        </Paper>
      </Container>
    </>
  );
};

export default DashboardPage;
