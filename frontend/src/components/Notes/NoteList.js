import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNotes } from '../../redux/slices/notesSlice';
import NoteItem from './NoteItem';
import { decryptNote } from '../../utils/encryption';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const NoteList = () => {
    const dispatch = useDispatch();
    const { notes, loading, error, searchTerm } = useSelector((state) => state.notes);

    useEffect(() => {
        dispatch(getNotes());
    }, [dispatch]);

    const filteredNotes = useMemo(() => {
        const notesWithRefs = notes.map(note => ({
            ...note,
            nodeRef: React.createRef(null)
        }));

        if (!searchTerm) {
            return notesWithRefs;
        }

        return notesWithRefs.filter(note =>
            decryptNote(note.encrypted_content).toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [notes, searchTerm]);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '32px' }}>
                <div className="spinner spinner-dark"></div>
            </div>
        );
    }

    if (error) {
        return <div className="alert alert-error">{error}</div>;
    }

    return (
        <div className="notes-wrapper" style={{ position: 'relative', height: 'calc(100vh - 580px)', overflowY: 'auto' }}>
            <TransitionGroup>
                {filteredNotes.map((note) => (
                    <CSSTransition
                        key={note.id}
                        nodeRef={note.nodeRef}
                        timeout={300}
                        classNames="note"
                    >
                        <NoteItem ref={note.nodeRef} note={note} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default NoteList;
