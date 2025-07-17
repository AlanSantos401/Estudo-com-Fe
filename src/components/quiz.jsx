import { useState } from "react";
import { questions } from "../dados/questions";
import { ArrowLeft } from "lucide-react";

function Quiz() {
	const [difficulty, setDifficulty] = useState(null);
	const [current, setCurrent] = useState(0);
	const [score, setScore] = useState(0);
	const [selected, setSelected] = useState(null);
	const [showResult, setShowResult] = useState(false);
	const [showFeedback, setShowFeedback] = useState(false);
	const [shuffledQuestions, setShuffledQuestions] = useState([]);

	if (!difficulty) {
		return (
			<div className="h-full w-full flex flex-col items-center  bg-gray-700 border-2 border-gray-50 rounded-xl p-5 gap-30">
				<h1 className=" text-xl md:text-4xl lg:text-3xl font-bold">Escolha o nível do Quiz Bíblico</h1>
				<div className="flex gap-4">
					<button
						className="px-5 md:px-10 lg:px-10 py-1 text-xl md:text-4xl lg:text-3xl cursor-pointer border-2 border-gray-50 rounded-xl hover:text-white hover:bg-green-500"
						onClick={() => {
							setDifficulty("facil");
							setShuffledQuestions(shuffleArray(questions["facil"]));
						}}
					>
						Fácil
					</button>
					<button
						className="px-5 md:px-10 lg:px-10 py-1 text-xl md:text-4xl lg:text-3xl cursor-pointer border-2 border-gray-50 rounded-xl hover:text-white hover:bg-yellow-500/80"
						onClick={() => {
							setDifficulty("medio");
							setShuffledQuestions(shuffleArray(questions["medio"]));
						}}
					>
						Médio
					</button>
					<button
						className="px-5 md:px-10 lg:px-10 py-1 text-xl md:text-4xl lg:text-3xl cursor-pointer border-2 border-gray-50 rounded-xl hover:text-white hover:bg-red-500/80"
						onClick={() => {
							setDifficulty("dificil");
							setShuffledQuestions(shuffleArray(questions["dificil"]));
						}}
					>
						Difícil
					</button>
				</div>
			</div>
		);
	}
	

	const currentQuestion = shuffledQuestions[current];

	const handleAnswer = (option) => {
		setSelected(option);
		if (option === currentQuestion.answer) {
			setScore((prev) => prev + 1);
		}

		setTimeout(() => {
			setShowFeedback(true);
		}, 1300);

		setTimeout(() => {
			setCurrent((prevCurrent) => {
				if (prevCurrent + 1 < shuffledQuestions.length) {
					setSelected(null);
					setShowFeedback(false);
					return prevCurrent + 1;
				} else {
					setShowResult(true);
					return prevCurrent;
				}
			});
		}, 2700);
	};

	if (showResult) {
		return (
			<div className="h-full w-full flex flex-col items-center bg-gray-700 border-2 border-gray-50 rounded-xl p-4">
				<h2 className="text-xl font-bold text-white">Resultado final:</h2>
				<p className="text-white">
					Você acertou {score} de {shuffledQuestions.length} perguntas!
				</p>
				<button
					onClick={() => window.location.reload()}
					className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					Tente novamente
				</button>
			</div>
		);
	}

	function shuffleArray(array) {
		return [...array].sort(() => Math.random() - 0.5);
	}

	return (
		<div className="h-full w-full flex flex-col items-center  bg-gray-700 border-2 border-gray-50 rounded-xl p-3 ">
			<div className="w-full ">
				<button onClick={() => setDifficulty(null)}>
					<ArrowLeft className="h-8 w-9 md:h-9 md:w-9 bg-gray-700 border-3 border-gray-50 rounded-3xl cursor-pointer hover:bg-gray-50" />
				</button>
			</div>
			<div className="w-full flex flex-col items-center gap-4 ">
				<h2 className=" md:text-3xl lg:text-2xl font-bold mb-1">{currentQuestion.question}</h2>
				<div className="flex flex-col gap-2 w-4/6 lg:w-3/6 cursor-pointer">
					{currentQuestion.options.map((option) => (
						<button
							key={option}
							onClick={() => handleAnswer(option)}
							className={`h-9 text-center p-2 rounded cursor-pointer ${
								selected === option ? "bg-blue-300" : "bg-gray-200"
							}`}
							disabled={!!selected}
						>
							{option}
						</button>
					))}
				</div>
				<div className="w-full mb-2">
					{selected && showFeedback && (
						<p className="font-medium text-xl break-words">
							{selected === currentQuestion.answer
								? "✅ Resposta correta!"
								: "❌ Resposta incorreta!"}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default Quiz;
