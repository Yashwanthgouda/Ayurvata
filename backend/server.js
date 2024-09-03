const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Plant = require('./models/Plant'); // Ensure your Plant model path is correct

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/ayurvata', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware to parse JSON
app.use(express.json());

// Endpoint to fetch plant details by ID
app.get('/plants/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send('Invalid ID format');
    }

    try {
        const plant = await Plant.findById(id);
        if (!plant) {
            return res.status(404).send('Plant not found');
        }
        res.json(plant);
    } catch (error) {
        console.error('Error fetching plant:', error);
        res.status(500).send('Error fetching plant details');
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
