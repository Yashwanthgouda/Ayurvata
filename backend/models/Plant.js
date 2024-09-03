const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    name: String,
    scientificName: String,
    description: String,
    image: String,
    benefits: String,
    scientificClassification: {
        kingdom: String,
        family: String,
        genus: String,
        species: String
    },
    commonNames: [String],
    geographicalDistribution: String,
    botanicalDescription: String,
    phytochemicalConstituents: String,
    traditionalAndModernUses: String,
    culturalAndHistoricalSignificance: String,
    potentialSideEffectsAndContraindications: String,
    conservationStatus: String,
    cultivation: String
});

module.exports = mongoose.model('Plant', plantSchema);
