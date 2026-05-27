import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/slices/notesSlice';

const NoteModal = ({ open, handleClose }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const content = `${title}\n${body}`;
        dispatch(addNote({ content }));
        handleClose();
        setTitle('');
        setBody('');
    };

    if (!open) return null;

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-header-title">Add Note</h3>
                    <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
                        <svg className="close-icon-svg" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Note Title</label>
                        <input
                            type="text"
                            id="title"
                            autoFocus
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="input-field"
                            placeholder="Enter title..."
                        />
                    </div>
                    <div className="form-group" style={{ marginTop: '16px' }}>
                        <label htmlFor="body" className="form-label">Note Body</label>
                        <textarea
                            id="body"
                            rows={4}
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            className="textarea-field"
                            placeholder="Type note content here..."
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <button 
                        type="button" 
                        className="btn btn-outline btn-compact" 
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-primary btn-compact" 
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoteModal;
