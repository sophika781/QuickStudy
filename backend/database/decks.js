const mongoose= require('mongoose');

const deckSchema = new mongoose.Schema({
    _id: String,         
    name: String,
    description: String,
  }, { collection: 'decks' });

  module.exports = mongoose.model('deck', deckSchema);