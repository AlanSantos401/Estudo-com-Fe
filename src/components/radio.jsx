import { FastForward, Pause, Play, Rewind } from "lucide-react";
import { useRef, useState } from "react";

function RadioPlayer() {
	const audioRef = useRef(null);
	const [status, setStatus] = useState("idle");

	const togglePlay = () => {
		const audio = audioRef.current;

		if (!audio) return;

		if (audio.paused) {
			setStatus("loading");
			audio
				.play()
				.then(() => setStatus("playing"))
				.catch((err) => {
					console.error("Erro ao reproduzir:", err);
					setStatus("error");
				});
		} else {
			audio.pause();
			setStatus("paused");
		}
	};

	return (
		<div className="flex  items-end justify-center p-5 bg-[url('./assets/udf.png')] bg-center bg-cover h-full w-full rounded-xl gap-8">
			<audio
				ref={audioRef}
				src="/radio/stream"
				preload="none"
				onError={() => setStatus("error")}
				onPlaying={() => setStatus("playing")}
				onPause={() => setStatus("paused")}
			/>
			<button className="w-14 h-14 flex items-center justify-center cursor-pointer border border-gray-900/80 rounded-full bg-gray-900/30 text-blue-500">
				<Rewind className="w-9 h-9" />
			</button>
			<button
				onClick={togglePlay}
				className="w-15 h-15 text-blue-500 cursor-pointer border border-y-gray-900/80 rounded-4xl bg-gray-900/30 flex items-center justify-center"
			>
				{status === "playing" ? (
					<Pause className="w-8 h-8" />
				) : (
					<Play className="w-8 h-8" />
				)}
			</button>
			<button className="w-14 h-14 flex items-center justify-center cursor-pointer border border-gray-900/80 rounded-full bg-gray-900/30 text-blue-500">
				<FastForward className="w-9 h-9" />
			</button>
		</div>
	);
}

export default RadioPlayer;
