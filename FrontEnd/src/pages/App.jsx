import {
	Book,
	Bot,
	Calendar,
	ChevronUp,
	Joystick,
	Library,
	Music2,
	PencilLine,
	Search,
	User,
} from "lucide-react";
import Biblia from "../components/biblia";
import Ia from "../components/ia";
import HarpaCrista from "../components/harpaCristan";
import Pesquisar from "../components/pesquisar";
import Calendario from "../components/calendario";
import { useEffect, useRef, useState } from "react";
import RadioPlayer from "../components/radio";
import Quiz from "../components/quiz";
import Anotacoes from "../components/anotacao";
import VersiculoDoDia from "../components/versiculoDoDia";

function App() {
	const [selectedItem, setSelectedItem] = useState("biblia");
	const [localizacao, setLocalizacao] = useState(null);
	const [menuAberto, setMenuAberto] = useState(false);

	const menuRef = useRef();

	useEffect(() => {
		const handleClickFora = (event) => {
			if (
				menuAberto &&
				menuRef.current &&
				!menuRef.current.contains(event.target)
			) {
				setMenuAberto(false);
			}
		};

		document.addEventListener("mousedown", handleClickFora);
		return () => {
			document.removeEventListener("mousedown", handleClickFora);
		};
	}, [menuAberto]);

	return (
		<>
			<div className=" flex flex-col justify-center items-center  bg-gray-950 h-[100vh] w-full gap-4">
				<h1 className="text-4xl pt-0 md:pt-5 lg:text-6xl font-bold text-blue-500">
					ESTUDE COM FÉ
				</h1>

				<div className="flex flex-col lg:flex-row lg:max-h-[100%] w-full gap-4 p-4">
					<button
						className="lg:hidden  fixed top-11 right-4 z-30 bg-gray-800 text-white p-2 rounded"
						onClick={() => setMenuAberto(true)}
					>
						☰
					</button>


					<div
						ref={menuRef}
						className={`
                        ${menuAberto ? "flex" : "hidden"}
                           fixed inset-y-0 right-0 z-40
                           w-4/5 sm:w-2/3 md:w-1/2
                           lg:static lg:flex lg:w-1/4
                           max-h-[100%] p-4 lg:pt-0
                        `}
					>
						<div className="flex flex-col max-h-[55vh] md:h-[43%] lg:min-h-[64.5vh] w-full bg-gray-800 rounded-xl   text-3xl font-bold text-blue-500 gap-1 p-5 pt-8 ">
							<button
								className="lg:hidden absolute top-8 right-10 text-blue-500 text-3xl font-bold  hover:text-red-600 "
								onClick={() => setMenuAberto(false)}
							>
								X
							</button>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => {
									setSelectedItem("biblia");
									setLocalizacao(null);
								}}
							>
								<Book className="h-6 w-6   text-blue-500" />
								<span className="text-2xl text-blue-500">A Bíblia</span>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("pesquisar")}
							>
								<Search className="h-6 w-6  text-blue-500" />
								<div>
									<span className="text-2xl text-blue-500">Pesquisar</span>
									<p className="font-medium text-lg">Livro/Versiculo</p>
								</div>
							</div>

							<div
								onClick={() => setSelectedItem("anotacao")}
								className="flex items-center gap-2 cursor-pointer"
							>
								<PencilLine className="h-6 w-6" />
								<span className="text-2xl ">Anotações</span>
							</div>

							<div className="flex items-center gap-2 cursor-pointer">
								<Library className="h-6 w-6 text-blue-500" />
								<span className="text-2xl text-blue-500">Radio Gospel</span>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("harpa")}
							>
								<Music2 className="h-6 w-6 text-blue-500" />
								<span className="text-2xl text-blue-500">Harpa</span>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("calendario")}
							>
								<Calendar className="h-6 w-6 text-blue-500" />
								<span className="text-2xl text-blue-500">Calendario</span>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("quiz")}
							>
								<Joystick className="h-6 w-6 text-blue-500" />
								<span className="text-2xl text-blue-500">Quiz</span>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("ia")}
							>
								<Bot className="h-6 w-6 text-blue-500" />
								<span className="text-2xl text-blue-500">Estudo com IA</span>
							</div>

							<div className="flex items-center w-full mt-18 md:mt-16">
								<User className="h-6 w-6  text-blue-500 cursor-pointer" />
								<ChevronUp className="h-6 w-6  text-blue-500 cursor-pointer" />
							</div>
						</div>
					</div>

					<div className="flex flex-col w-full h-[66vh] lg:h-[79vh] lg:w-3/5  order-3 lg:order-2 gap-4 overflow-auto lg:overflow-visible pb-5">
						<div className="h-full lg:h-[85%] w-full lg:overflow-auto border-3 lg:border-2 border-gray-50 rounded-xl">
							{selectedItem === "biblia" && (
								<Biblia
									localizacao={localizacao}
									setLocalizacao={setLocalizacao}
								/>
							)}
							{selectedItem === "pesquisar" && (
								<Pesquisar
									setSelectedItem={setSelectedItem}
									setLocalizacao={setLocalizacao}
								/>
							)}
							{selectedItem === "anotacao" && <Anotacoes />}
							{selectedItem === "harpa" && <HarpaCrista />}
							{selectedItem === "calendario" && <Calendario />}
							{selectedItem === "quiz" && <Quiz />}
							{selectedItem === "ia" && <Ia />}
						</div>
					</div>

					<div className="h-[35%]  lg:h-full w-full lg:w-1/4 order-1 lg:order-3 lg:gap-7 flex flex-col">
						<div className=" h-full md:h-50 lg:h-[41%] w-full border-2 border-gray-50 rounded-xl">
							<RadioPlayer />
						</div>

						<div className="hidden lg:block lg:h-[35%] lg:w-full bg-amber-500 border-2 border-gray-50 rounded-xl p-4">
							<span className=" text-shadow-blue-500 ">
								<VersiculoDoDia />
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
