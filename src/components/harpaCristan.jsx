import { ArrowLeft, BookOpenText, Search } from "lucide-react";
import harpa from "../dados/harpa_crista_640_hinos.json";
import { useState } from "react";

function HarpaCrista() {
	const [busca, setBusca] = useState("");
	const [hinoSelecionado, setHinoSelecionado] = useState(null);

	const hinos = Object.entries(harpa)
		.filter(([key]) => key !== "-1")
		.map(([key, value]) => ({ numero: key, ...value }));

	const hinosFiltrados = hinos.filter((hino) =>
		hino.hino.toLowerCase().includes(busca.toLocaleLowerCase()),
	);

	if (hinoSelecionado) {
		const hino = harpa[hinoSelecionado];

		return (
			 <div className="w-full h-full max-h-screen overflow-y-auto bg-gray-700 flex flex-col p-0">
				<div className="sticky top-0 z-10 flex justify-between p-3  bg-gray-700 ">

					<button onClick={() => setHinoSelecionado(null)} className="mb-4">
					<ArrowLeft className="h-8 w-9 md:h-11 md:w-11 lg:h-9 lg:w-9 bg-gray-700 border-3 border-gray-50 rounded-3xl cursor-pointer hover:bg-gray-50" />
				</button>

				<h1 className="text-xl md:text-3xl lg:text-2xl font-bold text-blue-500 mb-4">{hino.hino}</h1>

				</div>
				

				<div className=" text-blue-500 space-y-4 text-lg lg:text-xl leanding-relaxed p-3">
					{Object.entries(hino.verses).map(([key, verse]) => (
						<p
							key={key}
							dangerouslySetInnerHTML={{
								__html: `<strong>${key}.<strong/> ${verse}`,
							}}
						/>
					))}
					<hr className="border border-gray-50 my-4" />
					<p
					className="text-xl font-medium text-blue-500"
						dangerouslySetInnerHTML={{
							__html: `<strong>Coro:</strong> ${hino.coro}`,
						}}
					/>
				</div>
			</div>
		);
	}

	return (
		<div className="overflow-auto flex flex-col h-full w-full bg-gray-700 p-3">
			<h1 className="text-3xl md:text-4xl lg:text-3xl font-bold mb-3">
				Harpa Cristã
			</h1>

			<div className="sticky top-0 z-10 bg-transparent mb-4">
				<div className="flex items-center border border-gray-50 rounded-2xl px-4 py-2 shadow-sm">
					<Search className="text-blue-500 w-5 h-5 md:w-8 md:h-8 lg:w-5 lg:h-5 mr-2" />
					<input
						type="text"
						onChange={(e) => setBusca(e.target.value)}
						placeholder="Digite o sua pesquisa"
						className="w-full outline-none text-lg md:text-3xl lg:text-lg text-blue-500 bg-transparent"
					/>
				</div>
			</div>

			<div className="flex-1 overflow-y-auto pr-1">
				<ul className="space-y-4 w-full">
					{hinosFiltrados.map((hino) => (
						<li key={hino.numero} className="w-full" onClick={() => setHinoSelecionado(hino.numero)}>
							<div className=" flex items-center gap-3 cursor-pointer">
								<BookOpenText className="h-8 w-8 md:w-11 md:h-11 lg:w-7 lg:h-7 text-blue-500 mt-1" />
								<h2 className="text-xl md:text-3xl lg:text-xl font-semibold text-blue-500">
									{hino.hino}
								</h2>
							</div>
							<hr className="border border-gray-50 my-2" />
						</li>
					))}
					{hinosFiltrados.length === 0 && (
						<p className="text-center text-2xl md:text-3xl lg:text-2xl text-blue-500 font-bold mt-10">
							Nenhum hino encontrado
						</p>
					)}
				</ul>
			</div>
		</div>
	);
}

export default HarpaCrista;

// return (
// 	<div className="h-full w-full flex flex-col border-2 border-gray-50 rounded-xl p-5">
// 		<h1 className="text-3xl font-bold mb-2">Harpa Cristã</h1>

// 		<div className=" sticky top-0 z-10 flex flex-col h-full w-full gap-2">
// 			<div className="flex w-full border-2 rounded-2xl border-gray-50 px-2 py-2 gap-2">
// 				<Search />
// 				<input
// 					type="text"
// 					onChange={(e) => setBusca(e.target.value)}
// 					placeholder="Digite sua pesquisa"
// 					className="outline-none text-lg text-blue-500 w-full"
// 				/>
// 			</div>
// 		</div>

// 		<div>
// 			<ul>
// 				{hinosFiltrados.map((hino) => (
// 					<li key={hino.numero}>
//  <div className="flex items-center gap-2">
// 	<BookOpenText />
// 	<h2>

// 	</h2>
//  </div>
// 					</li>
// 				))}
// 			</ul>
// 		</div>

// 	</div>
// );
