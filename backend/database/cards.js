const mongoose= require('mongoose');

const cardSchema = new mongoose.Schema({
  _id: String,
  deckId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'deck'
  },
  front: String,     //If the front contains an image, store image url
  back: String,
}, { collection: 'cards' });

const Card = mongoose.model('card', cardSchema);