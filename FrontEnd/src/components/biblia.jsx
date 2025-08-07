import { BookOpenText } from "lucide-react";
import biblia from "../dados/almeida_rc.json";
import { useEffect, useState } from "react";

function Biblia({ localizacao }) {
	const [livroSelecionado, setLivroSelecionado] = useState("Gênesis");
	const [versiculoSelecionado, setVersiculoSelecionado] = useState(null);
	const [capituloSelecionado, setCapituloSelecionado] = useState(1);

	const livros = [...new Set(biblia.verses.map((v) => v.book_name))];

	useEffect(() => {
	if (localizacao) {
		setLivroSelecionado(localizacao.livro);
		setCapituloSelecionado(localizacao.capitulo);

		if (localizacao.versiculo) {
			setVersiculoSelecionado(localizacao.versiculo);
		} else {
			setVersiculoSelecionado(null); 
		}
	}
}, [localizacao]);



	useEffect(() => {
		if (versiculoSelecionado) {
			setTimeout(() => {
				const el = document.getElementById(`versiculo-${versiculoSelecionado}`);
				if (el) {
					el.scrollIntoView({ behavior: "smooth", block: "center" });
				}
			}, 100);
		}
	}, [versiculoSelecionado]);

	const capitulos = [
		...new Set(
			biblia.verses
				.filter((v) => v.book_name === livroSelecionado)
				.map((v) => v.chapter),
		),
	];

	const versiculos = biblia.verses.filter(
		(v) =>
			v.book_name === livroSelecionado &&
			v.chapter === Number(capituloSelecionado),
	);

	return (
		<>
			<div className="overflow-auto  h-full w-full bg-gray-700 border-transparent rounded-xl">
				<div className="flex sticky top-0 z-10 bg-gray-700 gap-3 p-3 w-full justify-between">
					<h1 className=" flex gap-3 text-center text-xl md:text-5xl lg:text-3xl font-bold mb-3 text-blue-500">
						<BookOpenText className="hidden md:block md:w-11 md:h-11 lg:w-7 lg:h-7 text-blue-500 mt-1" />
						Biblía Sagrada
					</h1>

					<div className=" flex gap-5 mr-5">
						<select
							className="w-30 md:w-48 border-2 border-gray-50 p-3 rounded-xl cursor-pointer focus:outline-none text-blue-500"
							name="livros"
							id="livros"
							value={livroSelecionado}
							onChange={(e) => {
								setLivroSelecionado(e.target.value);
								setCapituloSelecionado(1);
							}}
						>
							{livros.map((livro) => (
								<option key={livro} value={livro}>
									{livro}
								</option>
							))}
						</select>

						<select
							className="w-15 md:w-20 border-2 border-gray-50 p-3 rounded-xl cursor-pointer focus:outline-none text-blue-500"
							name="capitulos"
							id="capitulos"
							value={capituloSelecionado}
							onChange={(e) => setCapituloSelecionado(e.target.value)}
						>
							{capitulos.map((cap) => (
								<option key={cap} value={cap}>
									{cap}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="p-3">
					{versiculos.map((v) => (
						<p
							key={v.verse}
							id={`versiculo-${v.verse}`}
							className={`leading-relaxed text-xl font-medium p-2 rounded transition-colors duration-300 ${
								v.verse === versiculoSelecionado
									? "bg-yellow-300 text-gray-900"
									: ""
							}`}
						>
							<strong>{v.verse}</strong>. {v.text}
						</p>
					))}
				</div>
			</div>
		</>
	);
}

export default Biblia;
