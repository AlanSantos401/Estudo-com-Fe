import { useState, useRef, useEffect } from "react";

const Ia = () => {
	const [mensagem, setMensagem] = useState("");
	const [carregando, setCarregando] = useState(false);
	const [historico, setHistorico] = useState([]);

	const scrollRef = useRef(null);

	const enviarParaCroq = async () => {
		if (!mensagem.trim()) return;

		const perguntaAtual = mensagem;
		setMensagem("");
		setCarregando(true);

		try {
			const respostaApi = await fetch(
				"http://localhost:5678/webhook/agente-cristao",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ message: perguntaAtual }),
				},
			);

			const data = await respostaApi.json();

			if (!data || !data.resposta) throw new Error("Resposta vazia da IA");

			const respostaRecebida =
				data.resposta || "...";

			console.log(respostaApi);

			setHistorico((prev) => [
				...prev,
				{ pergunta: perguntaAtual, resposta: respostaRecebida },
			]);
		} catch (err) {
			console.error("Erro ao comunicar com o Croq:", err.message);
			setHistorico((prev) => [
				...prev,
				{
					pergunta: perguntaAtual,
					resposta: "Croq não entendeu sua pergunta.",
				},
			]);
		} finally {
			setCarregando(false);
		}
	};

	// Scroll automático para o fim da conversa
	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, [historico]);

	return (
		<div className="flex flex-col h-full w-full bg-gray-700 ">
			{/* Cabeçalho */}
			<div className="sticky top-0 z-10 bg-gray-700 pt-2">
				<h1 className="text-xl font-bold ml-3 mt-0 text-blue-500">
					Fale com o Croq
				</h1>
				<hr className="border border-gray-50 my-4" />
			</div>

			{/* Área de Conversa */}
			<div
				ref={scrollRef}
				className="flex flex-col w-full flex-1 overflow-auto px-4 rounded min-h-[80px] h-[75%] text-blue-500 gap-3"
			>
				{historico.length === 0 ? (
					<p className="text-blue-500">Aguardando sua pergunta</p>
				) : (
					historico.map((item, index) => (
						<div key={index} className="flex flex-col gap-1">
							<div className="flex justify-end">
								<p className=" text-blue-500 p-2 rounded-xl font-semibold max-w-[80%]">
									{item.pergunta}
								</p>
							</div>
							<div className="flex justify-start">
								<p className=" text-blue-500 p-2 rounded-xl font-semibold max-w-[80%]">
									{item.resposta}
								</p>
							</div>
						</div>
					))
				)}

				{carregando && (
					<div className="flex justify-start">
						<p className="text-blue-500 italic">Croq está pensando...</p>
					</div>
				)}
			</div>

			{/* Campo de Entrada */}
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
