import { Search } from "lucide-react";
import biblia from "../dados/almeida_rc.json";
import { useState } from "react";

function Pesquisar({ setSelectedItem, setLocalizacao }) {
	const [busca, setBusca] = useState("");
	const [resultados, setResultados] = useState([]);

	const handleClick = (verso) => {
		setLocalizacao({
			livro: verso.book_name,
			capitulo: verso.chapter,
			versiculo: verso.verse,
		});

		setSelectedItem("biblia");
	};

	const handleSearch = (texto) => {
		setBusca(texto);

		if (texto.length >= 2) {
			const filtro = biblia.verses.filter((verso) =>
				verso.text.toLowerCase().includes(texto.toLowerCase()),
			);
			setResultados(filtro);
		} else {
			setResultados([]);
		}
	};

	return (
		<div className="w-full h-full bg-gray-700 p- overflow-y-auto border-transparent rounded-xl">
			<div className="sticky top-0 z-10 bg-gray-700 mb-4 p-3">
				<div className="sticky top-0 z-10 flex items-center border border-gray-50 rounded-2xl px-4 py-2 shadow-sm ">
					<Search className="text-blue-500 w-5 h-5 md:w-8 md:h-8 lg:w-5 lg:h-5 mr-2" />
					<input
						type="text"
						value={busca}
						onChange={(e) => handleSearch(e.target.value)}
						placeholder="Digite o sua pesquisa"
						className="w-full outline-none text-lg md:text-3xl lg:text-lg text-blue-500 bg-transparent pl-2"
					/>
				</div>
			</div>
			<div className="flex flex-col p-2 pt-0 gap-2 cursor-pointer">
				{resultados.slice(0, 100).map((v, index) => (
					<p className="text-xl" key={index} onClick={() => handleClick(v)}>
						<strong>
							{v.book_name} {v.chapter}:{v.verse}
						</strong>
						{""} - {v.text}
						<hr className="border border-gray-50 my-4" />
					</p>
				))}
			</div>
		</div>
	);
}

export default Pesquisar;
