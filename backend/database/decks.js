const mongoose= require('mongoose');

const deckSchema = new mongoose.Schema({     
    name: String,
    description: String,
  }, { collection: 'decks' });

  module.exports = mongoose.model('deck', deckSchema);