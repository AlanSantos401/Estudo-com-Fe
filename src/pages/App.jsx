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
import Quiz from "../components/quiz";

function App() {
	const [selectedItem, setSelectedItem] = useState("biblia");
	const [menuAberto, setMenuAberto] = useState(false);

	return (
		<>
			<div className=" flex flex-col justify-center items-center  bg-gray-950 h-screen w-full gap-4">
				<h1 className="text-4xl pt-5 lg:text-6xl font-bold text-blue-500">
					ESTUDE COM FÉ
				</h1>

				<div className="flex flex-col lg:flex-row h-full w-full gap-4 p-4">
					<button
						className="lg:hidden  fixed top-4 right-2 z-50 bg-gray-800 text-white p-2 rounded"
						onClick={() => setMenuAberto(true)}
					>
						☰
					</button>
					{/* className="hidden w-full h-full lg:w-1/4 order-2 lg:order-1" */}

					<div
						className={`
    ${menuAberto ? "flex" : "hidden"}
    fixed inset-0 z-40  lg:static lg:flex
 w-9/10 md:w-2/4 lg:w-1/4 h-full p-4 lg:pt-0
  `}
					>
						<div className="flex flex-col h-4/5 md:h-1/2 lg:h-full w-full bg-gray-800 rounded-xl   text-3xl font-bold text-blue-500 gap-4 p-5 pt-8 ">
							<button
								className="lg:hidden absolute top-6 right-8 md:top-6 md:right-8 text-blue-500 text-2xl font-bold"
								onClick={() => setMenuAberto(false)}
							>
								X
							</button>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("biblia")}
							>
								<Book className="h-6 w-6 md:h-7 md:w-7  text-blue-500" />
								<span className="text-2xl text-blue-500">A Bíblia</span>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("pesquisar")}
							>
								<Search className="h-6 w-6 md:h-7 md:w-7 text-blue-500" />
								<div>
									<span className="text-2xl text-blue-500">Pesquisar</span>
									<p className="font-medium text-lg">Livro/Versiculo</p>
								</div>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("explicada")}
							>
								<BookOpenText className="h-6 w-6 md:h-7  md:w-7 text-blue-500" />
								<span className="text-2xl text-blue-500">Biblía Explicada</span>
							</div>

							<div className="flex items-center gap-2 cursor-pointer">
								<Library className="h-6 w-6 md:h-7  md:w-7 text-blue-500" />
								<span className="text-2xl text-blue-500">Radio Gospel</span>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("harpa")}
							>
								<Music2 className="h-6 w-6 md:h-7 md:w-7 text-blue-500" />
								<span className="text-2xl text-blue-500">Harpa</span>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("calendario")}
							>
								<Calendar className="h-6 w-6 md:h-7  md:w-7 text-blue-500" />
								<span className="text-2xl text-blue-500">Calendario</span>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("quiz")}
							>
								<BookOpenText className="h-6 w-6 md:h-7  md:w-7 text-blue-500" />
								<span className="text-2xl text-blue-500">Quiz</span>
							</div>

							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setSelectedItem("ia")}
							>
								<Bot className="h-6 w-6 md:h-7  md:w-7 text-blue-500" />
								<span className="text-2xl text-blue-500">Estudo com IA</span>
							</div>
							<div className="flex items-center w-full mt-4 md:mt-10">
								<User className="h-6 w-6 md:h-7  md:w-7 text-blue-500 cursor-pointer" />
								<ChevronUp className="h-6 w-6 md:h-7  md:w-7 text-blue-500 cursor-pointer" />
							</div>
						</div>
					</div>

					<div className="flex flex-col w-full h-[68vh] lg:h-full lg:w-3/5 order-3 lg:order-2 gap-4 lg:overflow-hidden pb-5">
						<div className="h-full lg:h-3/4 w-full lg:overflow-auto ">
							{selectedItem === "biblia" && <Biblia />}
							{selectedItem === "pesquisar" && <Pesquisar />}
							{selectedItem === "explicada" && <BibliaExplicada />}
							{selectedItem === "harpa" && <HarpaCristan />}
							{selectedItem === "calendario" && <Calendario />}
							{selectedItem === "quiz" && <Quiz />}
							<div className="lg:hidden">{selectedItem === "ia" && <Ia />}</div>
						</div>

						<div className="hidden lg:block overflow-auto lg:h-2/5 lg:w-full ">
							<Ia />
						</div>
					</div>

					<div className="h-2/5  lg:h-full w-full lg:w-1/4 order-1 lg:order-3 lg:gap-7 flex flex-col">
						<div className=" h-full md:h-3/4 lg:h-2/4 w-full border-2 border-gray-50 rounded-xl">
							<RadioPlayer />
						</div>

						<div className="hidden lg:block lg:h-2/5 lg:w-full bg-amber-500 border-2 border-gray-50 rounded-xl p-4">
							<h1 className=" font-bold mb-2">Palavra do dia</h1>
							<span className=" text-shadow-blue-500 text-center ">
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

//  <>
// 			<div className=" flex flex-col justify-center items-center  bg-gray-950 min-h-screen w-full gap-4">
// 				<h1 className="text-4xl pt-5 lg:text-6xl font-bold text-blue-500">ESTUDE COM FÉ</h1>

// 				<div className="">
// 					<div className="flex flex-col h-full w-full lg:w-1/5 bg-gray-800 rounded-xl">
// 						<div className="flex flex-col h-full w-full bg-gray-800 rounded-xl p-8 pt-13 text-3xl font-bold text-blue-500 gap-4">
// 							<div
// 								className="flex items-center gap-2 cursor-pointer"
// 								onClick={() => setSelectedItem("biblia")}
// 							>
// 								<Book className="w-8 h-8 text-blue-500" />
// 								<span className="text-blue-500">A Bíblia</span>
// 							</div>

// 							<div
// 								className="flex items-center gap-2 cursor-pointer"
// 								onClick={() => setSelectedItem("pesquisar")}
// 							>
// 								<Search className="w-8 h-8 text-blue-500" />
// 								<div>
// 									<span className="text-blue-500">Pesquisar</span>
// 									<p className="font-medium text-lg">Livro/Versiculo</p>
// 								</div>
// 							</div>

// 							<div
// 								className="flex items-center gap-2 cursor-pointer"
// 								onClick={() => setSelectedItem("explicada")}
// 							>
// 								<BookOpenText className="w-8 h-8 text-blue-500" />
// 								<span className="text-blue-500">Biblía Explicada</span>
// 							</div>

// 							<div
// 								className="flex items-center gap-2 cursor-pointer"
// 							>
// 								<Library className="w-8 h-8 text-blue-500" />
// 								<span className="text-blue-500">Radio Gospel</span>
// 							</div>

// 							<div
// 								className="flex items-center gap-2 cursor-pointer"
// 								onClick={() => setSelectedItem("harpa")}
// 							>
// 								<Music2 className="w-8 h-8 text-blue-500" />
// 								<span className="text-blue-500">Harpa</span>
// 							</div>

// 							<div
// 								className="flex items-center gap-2 cursor-pointer"
// 								onClick={() => setSelectedItem("calendario")}
// 							>
// 								<Calendar className="w-8 h-8 text-blue-500" />
// 								<span className="text-blue-500">Calendario</span>
// 							</div>

// 							<div
// 							className="flex items-center gap-2 cursor-pointer"
// 							onClick={() => setSelectedItem("quiz")}
// 							>
// 								<BookOpenText className="w-8 h-8 text-blue-500" />
// 								<span className="text-blue-500">Quiz</span>

// 							</div>

// 							<div
// 								className="flex items-center gap-2 cursor-pointer"
// 							>
// 								<Bot className="w-8 h-8 text-blue-500" />
// 								<span className="text-blue-500">Estudo com IA</span>
// 							</div>
// 						</div>

// 						<div className="flex items-center h-1/10 w-full p-7 ">
// 							<User className="w-7 h-7 text-blue-500 cursor-pointer" />
// 							<ChevronUp className="w-7 h-7 text-blue-500 cursor-pointer" />
// 						</div>
// 					</div>

// 					<div className="flex flex-col h-full w-1/2 rounded-xl gap-4">
// 						<div className="h-3/4 gap-2">
// 							{selectedItem === "biblia" && <Biblia />}
// 							{selectedItem === "pesquisar" && <Pesquisar />}
// 							{selectedItem === "explicada" && <BibliaExplicada />}
// 							{selectedItem === "harpa" && <HarpaCristan />}
// 							{selectedItem === "calendario" && <Calendario />}
// 							{selectedItem === "quiz" && <Quiz />}
// 						</div>
// 						<Ia />
// 					</div>

// 					<div className="flex flex-col h-full w-1/5 gap-7 mb-9 pt-5" >
// 						<div className="h-3/5 w-full  border-2 border-gray-50 rounded-xl">
// 							<RadioPlayer />
// 						</div>

// 						<div className="h-2/5 w-full bg-amber-400 border-2 border-gray-50 rounded-xl p-4">
// 						      <h1 className=" font-bold mb-2">Palavra do dia</h1>
// 							<span className="text-shadow-blue-500 text-center ">
// 								Não fui eu que ordenei a você? Seja forte e corajoso! Não se
// 								apavore nem desanime, pois o Senhor, o seu Deus, estará com você
// 								por onde você andar". Josué 1:9
// 							</span>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
