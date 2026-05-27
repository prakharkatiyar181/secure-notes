import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Layout/Header';
import NoteForm from '../components/Notes/NoteForm';
import NoteList from '../components/Notes/NoteList';
import SearchBar from '../components/common/SearchBar';
import NoteModal from '../components/Notes/NoteModal';
import { setSearchTerm } from '../redux/slices/notesSlice';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearch = (term) => {
    dispatch(setSearchTerm(term));
  };

  return (
    <div className="screen-center">
      <div className="dashboard-card-wrapper card">
        <Header />
        <div className="card-body">
          <div className="flex-between" style={{ marginBottom: '24px' }}>
            <NoteForm handleOpen={handleOpen} />
            <SearchBar onSearch={handleSearch} />
          </div>
          <NoteList />
        </div>
      </div>
      <NoteModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default DashboardPage;
