import React, { useState } from "react";

const MoodForm = ({ onAddMood }) => {
	const [mood, setMood] = useState("😊");
	const [note, setNote] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const newMood = {
			id: Date.now(),
			mood,
			note,
			date: new Date().toLocaleDateString(),
		};
		onAddMood(newMood);
		setNote("");
	};

	return (
		<form onSubmit={handleSubmit} className="mood-form">
			<label>
				Ton humeur :
				<select value={mood} onChange={(e) => setMood(e.target.value)}>
					<option>😊</option>
					<option>😐</option>
					<option>😔</option>
					<option>😠</option>
					<option>😄</option>
				</select>
			</label>
			<label>
				Note :
				<textarea
					placeholder="Écris ce que tu ressens..."
					value={note}
					onChange={(e) => setNote(e.target.value)}
				/>
			</label>
			<button type="submit">Ajouter</button>
		</form>
	);
};

export default MoodForm;
