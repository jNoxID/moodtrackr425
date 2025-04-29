import React from "react";
import { useMood } from "../hooks/useMood";

const MoodButtons = () => {
	const { saveMood, moods } = useMood();

	return (
		<div className="mood-tracker">
			<h2>Comment tu te sens aujourd’hui ?</h2>
			<div className="buttons">
				<button onClick={() => saveMood("😊")}>😊</button>
				<button onClick={() => saveMood("😢")}>😢</button>
				<button onClick={() => saveMood("😡")}>😡</button>
				<button onClick={() => saveMood("😴")}>😴</button>
			</div>

			<h3>Historique :</h3>
			<ul>
				{moods.map((entry, index) => (
					<li key={index}>
						{entry.date.slice(0, 10)} : {entry.mood}
					</li>
				))}
			</ul>
		</div>
	);
};

export default MoodButtons;
