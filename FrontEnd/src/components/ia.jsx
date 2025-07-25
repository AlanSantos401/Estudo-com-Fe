import { useState } from "react";

const Ia = () => {
	const [mensagem, setMensagem] = useState("");
	const [resposta, setResposta] = useState("");
	const [carregando, setCarregando] = useState(false);
	const [textoNaDiv, setTextoNaDiv] = useState("");

	const enviarParaCroq = async () => {
		if (!mensagem.trim()) return;

		setCarregando("Croq está pensando...");
		setTextoNaDiv(mensagem);
		setMensagem("");

		try {
			const respostaApi = await fetch(
				"https://alansan55.app.n8n.cloud/webhook-test/agente-cristao",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ message: mensagem }),
				},
			);

			const texto = await respostaApi.text();

			if (!texto) throw new Error("Resposta vazia da IA");

			const data = JSON.parse(texto);

			setResposta(data.resposta || "Croq não entendeu sua pergunta.");
			console.log(data);
		} catch (err) {
			console.error("Erro ao comunicar com o Croq:", err.message);
			setResposta("Croq não entendeu sua pergunta.");
		} finally {
			setCarregando(false);
		}
	};

	return (
		<div className="flex flex-col h-full w-full bg-gray-700 gap-2">
			<div className="sticky top-0 z-10 bg-gray-700 pt-2">
				<h1 className="text-xl font-bold ml-3 mt-0 text-blue-500">
					Fale com o Croq
				</h1>
				<hr className="border border-gray-50 my-4" />
			</div>

			<div className="w-[98%] flex justify-end text-right  ">
				{textoNaDiv && (
					<p className="bg-amber-600 border border-transparent p-2 rounded-xl font-semibold">
						{textoNaDiv}
					</p>
				)}
			</div>

			<div className=" w-[90%] flex-1 overflow-auto px-4 rounded min-h-[80px] h-[75%]  text-blue-500">
				{resposta ? (
					<p className="bg-blue-400 border border-transparent p-2 rounded-xl font-semibold">
						{resposta}
					</p>
				) : (
					<p>Aguardando sua pergunta</p>
				)}
			</div>

			<div className="sticky bottom-0 z-10 bg-gray-700 flex gap-2 p-3">
				<input
					className="w-full outline-none text-lg md:text-3xl lg:text-lg border-2 border-gray-50 rounded-2xl h-11 md:h-15 lg:h-11 text-blue-500 bg-transparent pl-2 p-1"
					type="text"
					value={mensagem}
					placeholder="Digite sua pergunta bíblica..."
					onChange={(e) => setMensagem(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") enviarParaCroq();
					}}
				/>

				<button
					className="px-5 md:px-10 lg:px-5 py-1 text-xl md:text-4xl lg:text-xl cursor-pointer border-2 border-gray-50 rounded-xl hover:text-white hover:bg-green-600/60 mt-1"
					onClick={enviarParaCroq}
					disabled={carregando}
				>
					Enviar
				</button>
			</div>
		</div>
	);
};
export default Ia;
