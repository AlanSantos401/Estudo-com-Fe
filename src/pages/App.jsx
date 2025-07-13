import {
	Book,
	BookOpenText,
	Bot,
	Calendar,
	ChevronUp,
	Library,
	Music2,
	Search,
	User,
} from "lucide-react";
import Biblia from "../components/Biblia";
import BibliaExplicada from "../components/bibliaExplicada";
import Ia from "../components/ia";
import HarpaCristan from "../components/harpaCristan";
import Pesquisar from "../components/pesquisar";
import Calendario from "../components/calendario";
import { useState } from "react";
import RadioPlayer from "../components/radio";

function App() {
	const [selectedItem, setSelectedItem] = useState("biblia");

	return (
		<>
			<div className=" flex justify-center items-center flex-col bg-gray-950 h-screen w-full gap-4">
				<h1 className="pt-5 text-6xl font-bold text-blue-500">ESTUDE COM FÉ</h1>

				<div className="flex justify-center items-center h-screen w-full gap-12 p-5">
					<div className="flex flex-col h-full w-1/5 bg-gray-800 rounded-xl">
						<div className="flex flex-col h-full w-full bg-gray-800 rounded-xl p-8 pt-13 text-3xl font-bold text-blue-500 gap-4">
							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("biblia")}
							>
								<Book className="w-8 h-8 text-blue-500" />
								<span className="text-blue-500">A Bíblia</span>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("pesquisar")}
							>
								<Search className="w-8 h-8 text-blue-500" />
								<div>
									<span className="text-blue-500">Pesquisar</span>
									<p className="font-medium text-lg">Livro/Versiculo</p>
								</div>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("explicada")}
							>
								<BookOpenText className="w-8 h-8 text-blue-500" />
								<span className="text-blue-500">Biblía Explicada</span>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
							>
								<Library className="w-8 h-8 text-blue-500" />
								<span className="text-blue-500">Radio Gospel</span>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("harpa")}
							>
								<Music2 className="w-8 h-8 text-blue-500" />
								<span className="text-blue-500">Harpa</span>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("calendario")}
							>
								<Calendar className="w-8 h-8 text-blue-500" />
								<span className="text-blue-500">Calendario</span>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
							>
								<Bot className="w-8 h-8 text-blue-500" />
								<span className="text-blue-500">Estudo com IA</span>
							</div>
						</div>

						<div className="flex items-center h-1/10 w-full p-7 ">
							<User className="w-7 h-7 text-blue-500 cursor-pointer" />
							<ChevronUp className="w-7 h-7 text-blue-500 cursor-pointer" />
						</div>
					</div>

					<div className="flex flex-col h-full w-1/2 rounded-xl gap-4">
						<div className="h-3/4 gap-2">
							{selectedItem === "biblia" && <Biblia />}
							{selectedItem === "pesquisar" && <Pesquisar />}
							{selectedItem === "explicada" && <BibliaExplicada />}
							{selectedItem === "harpa" && <HarpaCristan />}	
							{selectedItem === "calendario" && <Calendario />}
						</div>
						<Ia />
					</div>

					<div className="flex flex-col h-full w-1/5 gap-7 mb-9 pt-5" >
						<div className="h-3/5 w-full  border-2 border-gray-50 rounded-xl">
							<RadioPlayer />
						</div>

						<div className="h-2/5 w-full bg-amber-400 border-2 border-gray-50 rounded-xl p-4">
						      <h1 className=" font-bold mb-2">Palavra do dia</h1>
							<span className="text-shadow-blue-500 text-center ">
								Não fui eu que ordenei a você? Seja forte e corajoso! Não se
								apavore nem desanime, pois o Senhor, o seu Deus, estará com você
								por onde você andar". Josué 1:9
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
