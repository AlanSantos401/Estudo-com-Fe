import { StickyNote, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

function Anotacoes() {
	const [anotacao, setAnotacao] = useState("");
	const [anotacoes, setAnotacoes] = useState([]);

	useEffect(() => {
		const salvas = JSON.parse(localStorage.getItem("anotacoes")) || [];
		setAnotacoes(salvas);
	}, []);

	useEffect(() => {
		localStorage.setItem("anotacoes", JSON.stringify(anotacoes));
	}, [anotacoes]);

	const adiconar = () => {
		if (anotacao.trim() !== "") {
			setAnotacoes([...anotacoes, anotacao]);
			setAnotacao("");
		}
	};

	const deletar = (index) => {
		const novas = [...anotacoes];
		novas.splice(index, 1);
		setAnotacoes(novas);
	};

	return (
		<div className="overflow-auto h-full w-full p-3 pt-0 gap-3 bg-gray-700 border-transparent rounded-xl" >
			<div className=" sticky top-0 z-10 bg-gray-700  p-2 md:p-3 ">
				<h2 className="flex gap-2 items-center text-2xl md:text-5xl lg:text-3xl text-blue-500 font-bold mb-1 md:mb-3 lg:mb-1">
					<StickyNote className="h-7 w-7 md:h-10 md:w-10"/> Minhas Anotações
				</h2>

				<textarea
					value={anotacao}
					onChange={(e) => setAnotacao(e.target.value)}
					placeholder="Digite sua anotação..."
					className="w-full outline-none text-lg md:text-3xl lg:text-lg border-2 border-gray-50 rounded-2xl h-11 md:h-15 lg:h-11 text-blue-500 bg-transparent p-1 pl-2"
				></textarea>
				<button
					className="px-5 md:px-10 lg:px-5 py-1 text-xl md:text-4xl lg:text-xl cursor-pointer border-2 border-gray-50 rounded-xl hover:text-white hover:bg-green-600/60 mt-1"
					onClick={adiconar}
				>
					Adicionar
				</button>
			</div>

			<ul className="space-y-2 mt-4">
				{anotacoes.map((item, index) => (
					<li
						className="flex justify-between items-center w-full bg-gray-800 p-3 rounded"
						key={index}
					>
						<span className="break-words w-11/12 md:text-2xl font-medium text-blue-500 ">{item}</span>
						<Trash2
							className=" md:w-8 md:h-8 cursor-pointer text-blue-500 hover:text-red-600"
							onClick={() => deletar(index)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Anotacoes;
