const express = require('express');
const router = express.Router();
const Note = require('../models/note');


// CREATE NOTE
router.post('/', async (req, res) => {
  try {
    const note = new Note(req.body);
    const saved = await note.save();
    res.json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET ALL NOTES
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE NOTE
router.put('/:id', async (req, res) => {
  try {
    const updated = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE NOTE
router.delete('/:id', async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;