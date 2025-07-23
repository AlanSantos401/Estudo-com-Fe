import getVersiculoAleatorio from "../dados/versiculo_do_dia";

const VersiculoDoDia = () => {
	const versiculo = getVersiculoAleatorio();

	return (
		<div className=" h-full w-full overflow-y-auto">
			<span>"{versiculo.texto}"</span>
			<span>{versiculo.Referencia}</span>
		</div>
	);
};

export default VersiculoDoDia;
