import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../redux/slices/notesSlice';
import { decryptNote } from '../../utils/encryption';

const NoteItem = React.forwardRef(({ note }, ref) => {
    const dispatch = useDispatch();
    const decryptedContent = decryptNote(note.encrypted_content);
    const [title, ...body] = decryptedContent.split('\n');
    const preview = body.join('\n');

    return (
        <div ref={ref} className="note-card">
            <div className="note-card-content">
                <h3 className="note-card-title">{title}</h3>
                <p className="note-card-body">{preview}</p>
            </div>
            <button 
                type="button"
                className="note-delete-btn" 
                aria-label="delete" 
                onClick={() => dispatch(deleteNote(note.id))}
            >
                <svg className="trash-icon-svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                </svg>
            </button>
        </div>
    );
});

export default NoteItem;
