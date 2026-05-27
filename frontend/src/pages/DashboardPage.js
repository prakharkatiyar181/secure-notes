import React from 'react';
import Header from '../components/Layout/Header';
import NoteForm from '../components/Notes/NoteForm';
import NoteList from '../components/Notes/NoteList';
import { Container } from '@mui/material';

const DashboardPage = () => {
  return (
    <>
      <Header />
      <Container component="main" maxWidth="md" sx={{ mt: 4 }}>
        <NoteForm />
        <NoteList />
      </Container>
    </>
  );
};

export default DashboardPage;
