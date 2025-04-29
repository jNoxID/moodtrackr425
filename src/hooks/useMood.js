// src/hooks/useMood.js

import { useState, useEffect } from 'react';

const API_URL = 'https://mood-api-r94v.onrender.com/api/moods';

export const useMood = () => {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    // Charger les moods depuis le backend
    const fetchMoods = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMoods(data);
    };

    fetchMoods();
  }, []);

  const saveMood = async (mood) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mood }),
    });

    const newMood = await res.json();
    setMoods(prev => [newMood, ...prev]);
  };

  return { moods, saveMood };
};