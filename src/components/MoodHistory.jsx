import React from "react";

const MoodHistory = ({ moods }) => {
	if (moods.length === 0) {
		return <p>Aucune humeur enregistrée pour le moment.</p>;
	}

	return (
		<div className="mood-history">
			<h2>Historique</h2>
			<ul>
				{moods.map((entry) => (
					<li key={entry.id}>
						<span className="mood">{entry.mood}</span>
						<span className="date">{entry.date}</span>
						<p>{entry.note}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MoodHistory;
