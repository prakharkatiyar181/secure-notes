import React from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Layout/Header';
import NoteForm from '../components/Notes/NoteForm';
import NoteList from '../components/Notes/NoteList';
import SearchBar from '../components/common/SearchBar';
import { setSearchTerm } from '../redux/slices/notesSlice';
import { Container } from '@mui/material';

const DashboardPage = () => {
  const dispatch = useDispatch();

  const handleSearch = (term) => {
    dispatch(setSearchTerm(term));
  };

  return (
    <>
      <Header />
      <Container component="main" maxWidth="md" sx={{ mt: 4 }}>
        <NoteForm />
        <SearchBar onSearch={handleSearch} />
        <NoteList />
      </Container>
    </>
  );
};

export default DashboardPage;
