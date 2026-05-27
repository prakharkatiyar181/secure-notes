const pool = require('../config/db');
const { validationResult } = require('express-validator');

const getNotes = async (req, res) => {
    try {
        const [notes] = await pool.query('SELECT * FROM notes WHERE user_id = ?', [req.user.id]);
        res.json(notes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const addNote = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { content } = req.body;

    try {
        const [result] = await pool.query(
            'INSERT INTO notes (user_id, encrypted_content) VALUES (?, ?)',
            [req.user.id, content]
        );

        const [newNote] = await pool.query('SELECT * FROM notes WHERE id = ?', [result.insertId]);

        res.json(newNote[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const deleteNote = async (req, res) => {
    try {
        const [notes] = await pool.query('SELECT * FROM notes WHERE id = ?', [req.params.id]);

        if (notes.length === 0) {
            return res.status(404).json({ msg: 'Note not found' });
        }

        const note = notes[0];

        if (note.user_id.toString() !== req.user.id.toString()) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await pool.query('DELETE FROM notes WHERE id = ?', [req.params.id]);

        res.json({ msg: 'Note removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getNotes,
    addNote,
    deleteNote,
};
