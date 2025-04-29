import { useState, useEffect } from 'react';

const API_URL = 'https://mood-api-r94v.onrender.com/api/moods'; // Remplace par ton URL Render
const WEATHER_API_KEY = '8e008f4c3652230f4689bd0eb064c626'; // Remplacer ici
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

const fetchWeather = async () => {
  if (!navigator.geolocation) {
    console.error('Geolocation not supported');
    return null;
  }

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(`${WEATHER_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`);
          const data = await res.json();

          resolve({
            description: data.weather[0].description,
            temperature: data.main.temp,
          });
        } catch (error) {
          console.error('Error fetching weather', error);
          resolve(null);
        }
      },
      (error) => {
        console.error('Geolocation error', error);
        resolve(null);
      }
    );
  });
};

export const useMood = () => {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setMoods(data);
      } catch (error) {
        console.error('Error fetching moods', error);
      }
    };

    fetchMoods();
  }, []);

  const saveMood = async (mood) => {
    const weather = await fetchWeather();

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood, weather }),
      });

      const newMood = await res.json();
      setMoods((prev) => [newMood, ...prev]);
    } catch (error) {
      console.error('Error saving mood', error);
    }
  };

  return { moods, saveMood };
};
