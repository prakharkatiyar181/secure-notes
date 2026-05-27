const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getNotes, addNote, deleteNote } = require('../controllers/notesController');
const { check } = require('express-validator');

router.get('/', auth, getNotes);

router.post('/', [
    auth,
    [
        check('content', 'Content is required').not().isEmpty()
    ]
], addNote);

router.delete('/:id', auth, deleteNote);

module.exports = router;
