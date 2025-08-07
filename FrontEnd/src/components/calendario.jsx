import {  useState } from "react";

function Calendario() {
  const [mesAtual, setMesAtual] = useState(new Date());

  const nomeMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const gerarDiasDoMes = (data) => {
    const ano = data.getFullYear();
    const mes = data.getMonth();

    const primeiroDiaSemana = new Date(ano, mes, 1).getDay();
    const totalDias = new Date(ano, mes + 1, 0).getDate();

    const diasEmBranco = Array(primeiroDiaSemana).fill(null);
    const diasNumerados = Array.from({ length: totalDias }, (_, i) => i + 1);

    return [...diasEmBranco, ...diasNumerados];
  };

  const dias = gerarDiasDoMes(mesAtual);

  const hoje = new Date();
  const ehHoje = (dia) =>
    dia &&
    hoje.getDate() === dia &&
    hoje.getMonth() === mesAtual.getMonth() &&
    hoje.getFullYear() === mesAtual.getFullYear();

  const mudarMes = (direcao) => {
    const novo = new Date(mesAtual);
    novo.setMonth(mesAtual.getMonth() + direcao);
    setMesAtual(novo);
  };

  return (
    <div className="h-full w-full bg-gray-700 p-3 overflow-auto border-transparent rounded-xl">
      {/* Header com navegação */}
      <div className="flex justify-between items-center mb-3 md:mb-6">
        <button
          onClick={() => mudarMes(-1)}
          className="text-4xl md:text-5xl cursor-pointer  font-bold px-3 hover:text-blue-300"
        >
          ‹
        </button>
        <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
          {nomeMeses[mesAtual.getMonth()]} de {mesAtual.getFullYear()}
        </h2>
        <button
          onClick={() => mudarMes(1)}
          className="text-shadow-gray-900 text-4xl md:text-5xl cursor-pointer font-bold px-3 hover:text-blue-300"
        >
          ›
        </button>
      </div>

      {/* Dias da semana */}
      <div className="grid grid-cols-7 gap-2 text-center text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-4">
        {["D", "S", "T", "Q", "Q", "S", "S"].map((dia, i) => (
          <div key={i}>{dia}</div>
        ))}
      </div>

      {/* Dias do mês */}
      <div className="grid grid-cols-7 gap-3 text-center">
        {dias.map((dia, i) => (
          <div
            key={i}
            className={`h-7 md:h-10 flex items-center text-gray-900 justify-center rounded-lg transition ${
              dia
                ? ehHoje(dia)
                  ? "bg-yellow-400 text-blue-800 font-bold"
                  : "bg-white/40 hover:bg-blue-600/40"
                : ""
            }`}
          >
            {dia || ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendario;