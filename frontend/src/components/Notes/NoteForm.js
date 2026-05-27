import React from 'react';

const NoteForm = ({ handleOpen }) => {
    return (
        <button
            type="button"
            onClick={handleOpen}
            className="btn btn-outline btn-compact"
            style={{ height: '38px', borderRadius: '8px', padding: '0 20px' }}
        >
            Add Note
        </button>
    );
};

export default NoteForm;
