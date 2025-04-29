import { useState, useEffect } from 'react';

export const useMood = () => {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('moods') || '[]');
    setMoods(stored);
  }, []);

  const saveMood = (mood) => {
    const newMoods = [...moods, { mood, date: new Date().toISOString() }];
    setMoods(newMoods);
    localStorage.setItem('moods', JSON.stringify(newMoods));
  };

  return { moods, saveMood };
};
