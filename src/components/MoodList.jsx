import React from "react";
import { useMood } from "../hooks/useMood";

const MoodList = () => {
	const { moods } = useMood();

	return (
		<div className="mood-list">
			<h2>Météo à la carte</h2>
			<ul>
				{moods.map((entry, index) => (
					<li key={index}>
						📅 {new Date(entry.date).toLocaleDateString()} - 🧠 {entry.mood}
						{entry.weather && (
							<>
								{" "}
								🌡️ {entry.weather.temperature}°C - {entry.weather.description}
							</>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default MoodList;
