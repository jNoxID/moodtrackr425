import React, { useState, useEffect } from "react";
import MoodForm from "./components/MoodForm";
import MoodHistory from "./components/MoodHistory";

const App = () => {
	const [moods, setMoods] = useState(() => {
		const stored = localStorage.getItem("moods");
		return stored ? JSON.parse(stored) : [];
	});

	useEffect(() => {
		localStorage.setItem("moods", JSON.stringify(moods));
	}, [moods]);

	const addMood = (moodEntry) => {
		setMoods([moodEntry, ...moods]);
	};

	return (
		<div className="container">
			<h1>MoodTrackr</h1>
			<MoodForm onAddMood={addMood} />
			<MoodHistory moods={moods} />
		</div>
	);
};

export default App;
