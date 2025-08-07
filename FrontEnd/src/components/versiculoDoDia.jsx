import { useEffect, useState } from "react";
import getVersiculoAleatorio from "../dados/versiculo_do_dia";

const VersiculoDoDia = () => {
	const [versiculo, setVersiculo] = useState(null);

	useEffect(() => {
		const salvarVersiculo = () => {
			const novoVersiculo = getVersiculoAleatorio();
			const agora = new Date().toISOString();
			localStorage.setItem("versiculo_do_dia", JSON.stringify(novoVersiculo));
			localStorage.setItem("ultima_atualizacao", agora);
			setVersiculo(novoVersiculo);
		};

		const ultimaAtualizacao = localStorage.getItem("ultima_atualizacao");

		if (ultimaAtualizacao) {
			const ultima = new Date(ultimaAtualizacao);
			const agora = new Date();

			const dataHoje = agora.toISOString().split("T")[0];
			const dataUltima = ultima.toISOString().split("T")[0];

			const passouDas7h = agora.getHours() >= 7;
			const ultimaAntesDas7h = ultima.getHours() < 7;

			if (
				dataHoje !== dataUltima ||
				(dataHoje === dataUltima && passouDas7h && ultimaAntesDas7h)
			) {
				salvarVersiculo();
			} else {
				const versiculoSalvo = JSON.parse(
					localStorage.getItem("versiculo_do_dia"),
				);
				setVersiculo(versiculoSalvo);
			}
		} else {
			salvarVersiculo();
		}
	}, []);

	if (!versiculo) return <div>Carregando Versículo...</div>;

	return (
		<div className="h-full w-full overflow-y-auto p-1">
			<span>"{versiculo.texto}"</span>
			<br />
			<span>{versiculo.Referencia}</span>
		</div>
	);
};

export default VersiculoDoDia;
