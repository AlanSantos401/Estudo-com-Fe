function QuestionCard({ questionData, onAnswer }) {
	return (
		<div>
			<h1 className="card">{questionData.question}</h1>
			<div className="options">
				{questionData.options.map((options, i) => (
					<button key={i} onClick={() => onAnswer(options)}>
						{options}
					</button>
				))}
			</div>
		</div>
	);
}
export default QuestionCard;
