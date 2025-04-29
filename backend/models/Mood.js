const mongoose = require('mongoose');

const MoodSchema = new mongoose.Schema({
  mood: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  weather: {
    description: { type: String },
    temperature: { type: Number },
  },
});

module.exports = mongoose.model('Mood', MoodSchema, 'moods');
