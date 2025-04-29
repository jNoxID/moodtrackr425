const mongoose = require('mongoose');

const MoodSchema = new mongoose.Schema({
  mood: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    index: true, // important pour timeField
  },
  userId: {
    type: String, // utile plus tard si tu gères plusieurs utilisateurs
    required: false,
  },
});

module.exports = mongoose.model('Mood', MoodSchema, 'moods');
