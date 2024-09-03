const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// GET /api/plants/:id - Retrieve a specific plant by ID
router.get('/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) return res.status(404).json({ message: 'Plant not found' });
    res.status(200).json(plant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
