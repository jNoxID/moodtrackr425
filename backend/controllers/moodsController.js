let moods = [];

const getMoods = (req, res) => {
  res.json(moods);
};

const postMood = (req, res) => {
  const { mood } = req.body;
  if (!mood) return res.status(400).json({ error: 'Mood is required' });

  const entry = {
    mood,
    date: new Date().toISOString(),
  };

  moods.push(entry);
  res.status(201).json(entry);
};

module.exports = {
  getMoods,
  postMood,
};
