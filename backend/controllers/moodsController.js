const Mood = require('../models/Mood');

const getMoods = async (req, res) => {
  try {
    const moods = await Mood.find().sort({ date: -1 });
    res.json(moods);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

const postMood = async (req, res) => {
  const { mood } = req.body;
  if (!mood) return res.status(400).json({ error: 'Mood is required' });

  try {
    const newMood = new Mood({ mood });
    const saved = await newMood.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de l\'enregistrement' });
  }
};

module.exports = {
  getMoods,
  postMood,
};
